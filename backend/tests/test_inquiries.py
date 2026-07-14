"""Backend API tests for Mr. Frozen marketing site."""
import os
import requests
import pytest

BASE = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE:
    # Fallback to frontend .env file
    from pathlib import Path
    env_file = Path("/app/frontend/.env")
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE = line.split("=", 1)[1].strip()
                break
BASE = BASE.rstrip("/")
API = f"{BASE}/api"


# Module: root health
class TestRoot:
    def test_root_brand(self):
        r = requests.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("brand") == "Mr. Frozen"
        assert "message" in data


# Module: inquiries CRUD + validation
class TestInquiries:
    valid_payload = {
        "name": "TEST_Buyer Singapore",
        "company": "TEST_Acme Imports Pte Ltd",
        "email": "test_buyer@example.com",
        "phone": "+65 9123 4567",
        "country": "Singapore",
        "buyer_type": "importer",
        "product_interest": ["IQF Green Peas", "Soya Chaap (15% protein)"],
        "quantity": "21T container",
        "message": "Please share spec sheet for IQF peas & soya chaap.",
    }

    def test_create_inquiry_success(self):
        r = requests.post(f"{API}/inquiries", json=self.valid_payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["name"] == self.valid_payload["name"]
        assert data["email"] == self.valid_payload["email"]
        assert data["country"] == "Singapore"
        assert data["status"] == "new"
        assert isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        # ISO format check
        from datetime import datetime
        datetime.fromisoformat(data["created_at"].replace("Z", "+00:00"))
        # Save id for chained test
        pytest.created_inquiry_id = data["id"]
        pytest.created_inquiry_email = data["email"]

    def test_create_inquiry_missing_name(self):
        bad = {k: v for k, v in self.valid_payload.items() if k != "name"}
        r = requests.post(f"{API}/inquiries", json=bad)
        assert r.status_code == 422

    def test_create_inquiry_missing_email(self):
        bad = {k: v for k, v in self.valid_payload.items() if k != "email"}
        r = requests.post(f"{API}/inquiries", json=bad)
        assert r.status_code == 422

    def test_create_inquiry_missing_country(self):
        bad = {k: v for k, v in self.valid_payload.items() if k != "country"}
        r = requests.post(f"{API}/inquiries", json=bad)
        assert r.status_code == 422

    def test_create_inquiry_invalid_email(self):
        bad = dict(self.valid_payload)
        bad["email"] = "not-an-email"
        r = requests.post(f"{API}/inquiries", json=bad)
        assert r.status_code == 422

    def test_list_inquiries_includes_created(self):
        r = requests.get(f"{API}/inquiries")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 1
        first = items[0]
        for k in ("id", "name", "email", "country", "status"):
            assert k in first
        # Verify created inquiry exists in list
        target_email = getattr(pytest, "created_inquiry_email", None)
        if target_email:
            found = [i for i in items if i["email"] == target_email]
            assert len(found) >= 1, "Just-created inquiry not in list"

    def test_inquiry_stats(self):
        r = requests.get(f"{API}/inquiries/stats")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data.get("total"), int)
        assert isinstance(data.get("new"), int)
        assert data["total"] >= 1
        assert data["new"] >= 1
