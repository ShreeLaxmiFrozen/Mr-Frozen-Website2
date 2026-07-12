# Mr. Frozen — Product Requirements Document

## Original Problem Statement
Brand "Mr. Frozen" — manufacturer of IQF green peas, carrots, cauliflower, 15% protein soya chaap, frozen fries, tikkis, and processed cheese (some white-labelled). Supplies 6T / 18T / 21T reefer truck loads to distributors, restaurants (Moti Mahal etc.) and exporters. Backed by a 35-year-old cold storage firm. Awarded by Amar Ujala (Kanpur). Top 5 frozen peas manufacturer in India. Emphasis on cleanliness, no chemicals, perfect blanch test, naturally green peas, no ice padding (vs swindling competitors). Looking to expand into expos and exports (Singapore + SE Asia).

## User Choices (Dec 2025)
- English only marketing site
- Inquiry form that saves to MongoDB (future admin page); also display email/phone/WhatsApp in Contact section
- No images uploaded yet — using stock visuals; user will replace later
- Professional, attractive, export-targeted (Singapore) vibe; emphasize cleanliness, quality, no chemicals, no ice padding

## Architecture
- **Frontend**: React 19 + Tailwind + Shadcn UI + sonner; sectioned single-page site (Nav, Hero, Marquee, About, Products, Quality, Capabilities, Export, Awards, InquiryForm, Contact, Footer). Fonts: Outfit (headings) + IBM Plex Sans/Mono (body/labels). Colors: #1E5631 primary, #FDFDF9 base, #E6B325 accent.
- **Backend**: FastAPI + Motor (async MongoDB). `/api/inquiries` (POST, GET, /stats), `/api/status` (legacy), `/api/`.
- **DB collections**: `inquiries`, `status_checks`.

## What's been implemented (2025-12)
- ✅ Full marketing homepage with 9 sections + sticky nav + mobile menu
- ✅ B2B inquiry form (name, company, email, phone, country, buyer_type, multi-product checkboxes, quantity, message)
- ✅ MongoDB persistence + GET listing endpoint
- ✅ Stats endpoint
- ✅ Sonner toast feedback; success state UI
- ✅ Photography guide is documented in /app/design_guidelines.json (delivered to user in finish summary)
- ✅ Tested E2E (backend 100% / frontend 95%, cosmetic toast issue fixed via noValidate)

## Backlog
### P1 — Admin & growth
- Admin page (auth-protected) at /admin/inquiries to view + change status of inquiries
- Email notification to sales inbox on new inquiry (Resend integration)
- Replace stock images with founder-uploaded factory/truck/blanch/product photography
- Add product spec-sheet PDF downloads per product
- Add an export brochure (PDF) auto-emailed on inquiry submit

### P2 — Trust & SEO
- Add factory virtual tour video / drone reel
- Add structured data (Organization, Product) for SEO
- Multilingual (Hindi toggle) once exports require
- Distributor map and "Where to find Mr. Frozen" section
- Add captcha / rate limiting on public POST /api/inquiries

### P2 — Future commerce
- Distributor login portal (track orders, request quotes, download invoices)

## Personas
1. **Foreign Importer (Singapore/UAE)** — wants spec sheet, MOQ, export paperwork
2. **Indian Distributor** — wants flexible small-MOQ (6T) reefer despatch & price
3. **Restaurant Buyer (Moti Mahal type)** — wants consistent soya chaap supply
4. **White-label Partner** — wants contract packing & warehousing

## Next Actions
- Owner to share real photography (see Photography Guide in design_guidelines.json)
- Owner to share real contact details (email/phone/WhatsApp) to replace placeholders in `Contact.jsx` & `Footer.jsx`
- Build admin inquiries dashboard
