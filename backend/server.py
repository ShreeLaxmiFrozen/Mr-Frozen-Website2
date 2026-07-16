from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr, field_validator
from typing import List, Optional
import uuid
from datetime import datetime, timezone

try:
    import resend
except ImportError:  # pragma: no cover
    resend = None


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Mr. Frozen API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class InquiryCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    company: Optional[str] = Field(None, max_length=160)
    email: Optional[EmailStr] = None
    phone: str = Field(..., min_length=8, max_length=20)
    country: str = Field(..., min_length=1, max_length=80)
    state: Optional[str] = Field(None, max_length=80)
    pin_code: Optional[str] = Field(None, max_length=12)
    buyer_type: Optional[str] = Field(None, max_length=60)
    product_interest: List[str] = Field(default_factory=list)
    other_products: Optional[str] = Field(None, max_length=300)
    quantity: Optional[str] = Field(None, max_length=60)
    message: Optional[str] = Field(None, max_length=2000)

@field_validator("phone")
@classmethod
def validate_phone(cls, value):
    import re

    value = value.strip()

    # Remove spaces, dashes and parentheses
    value = re.sub(r"[\s\-\(\)]", "", value)

    if not (re.fullmatch(r"^\+[1-9][0-9]{7,14}$", value)or re.fullmatch(r"^[0-9]{10}$", value)):
        raise ValueError(
            "Phone number must be in international format, e.g. +919876543210"
        )

    return value


class Inquiry(InquiryCreate):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "new"


# ---------- Routes ---------- added code right now till "error" line and bracket like 10 lines
@api_router.get("/")
async def root():
    return {"message": "Mr. Frozen API live", "brand": "Mr. Frozen"}

@api_router.get("/db-test")
async def db_test():
    try:
        result = await client.admin.command("ping")
        return {
            "success": True,
            "ping": result
        }
    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    items = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in items:
        if isinstance(check.get('timestamp'), str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return items


@api_router.post("/inquiries", response_model=Inquiry, status_code=201)
async def create_inquiry(payload: InquiryCreate, background_tasks: BackgroundTasks):
    inquiry = Inquiry(**payload.model_dump())
    doc = inquiry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.inquiries.insert_one(doc)
    # Fire-and-forget email notification (never blocks the API response)
    background_tasks.add_task(send_inquiry_email, inquiry)
    return inquiry


@api_router.get("/inquiries", response_model=List[Inquiry])
async def list_inquiries(limit: int = 200):
    items = await db.inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for it in items:
        if isinstance(it.get('created_at'), str):
            try:
                it['created_at'] = datetime.fromisoformat(it['created_at'])
            except Exception:
                pass
    return items


@api_router.get("/inquiries/stats")
async def inquiry_stats():
    total = await db.inquiries.count_documents({})
    new = await db.inquiries.count_documents({"status": "new"})
    return {"total": total, "new": new}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


async def send_inquiry_email(inq: Inquiry) -> None:
    """Send an inquiry-notification email via Resend. Fire-and-forget: any
    failure is logged, never raised, so the /api/inquiries save stays green."""
    api_key = os.environ.get("RESEND_API_KEY", "").strip()
    to_email = os.environ.get("NOTIFY_EMAIL", "").strip()
    sender = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev").strip()
    if not api_key or not to_email or resend is None:
        logger.info("Inquiry email skipped: RESEND_API_KEY / NOTIFY_EMAIL not configured")
        return
    try:
        resend.api_key = api_key
        rows = "".join(
            f"<tr><td style='padding:6px 12px;color:#475E4D;font-family:Arial,sans-serif;font-size:13px;white-space:nowrap'>{k}</td>"
            f"<td style='padding:6px 12px;color:#0F1A12;font-family:Arial,sans-serif;font-size:14px'>{v}</td></tr>"
            for k, v in [
                ("Name",              inq.name),
                ("Company",           inq.company or "—"),
                ("Email",             inq.email),
                ("Phone / WhatsApp",  inq.phone),
                ("Country",           inq.country),
                ("State",             inq.state or "—"),
                ("PIN code",          inq.pin_code or "—"),
                ("Products",          ", ".join(inq.product_interest) if inq.product_interest else "—"),
                ("Other product",     inq.other_products or "—"),
                ("Message",           (inq.message or "—").replace("\n", "<br>")),
            ]
        )
        html = (
            f"<div style='background:#FDFDF9;padding:24px;font-family:Arial,sans-serif'>"
            f"<h2 style='color:#1E5631;margin:0 0 4px'>New Mr. Frozen inquiry</h2>"
            f"<p style='color:#475E4D;font-size:12px;margin:0 0 18px'>ID: {inq.id} · Received {inq.created_at.strftime('%d %b %Y, %H:%M UTC')}</p>"
            f"<table style='border-collapse:collapse;background:#fff;border:1px solid #DCE6DF'>{rows}</table>"
            f"</div>"
        )
        params = {
            "from": sender,
            "to": [to_email],
            "subject": f"[Mr. Frozen] New inquiry from {inq.name} ({inq.country})",
            "html": html,
        }
        if inq.email:
            params["reply_to"] = inq.email
        await asyncio.to_thread(resend.Emails.send, params)
        logger.info("Inquiry email sent for %s → %s", inq.id, to_email)
    except Exception as e:
        logger.exception("Inquiry email failed: %s", e)
        

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
