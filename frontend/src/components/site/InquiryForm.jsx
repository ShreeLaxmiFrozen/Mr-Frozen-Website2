import React, { useState } from "react";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2, Phone, MessageCircle, Warehouse } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { submitInquiry } from "@/lib/api";
import { INDIAN_STATES, COUNTRIES } from "@/lib/geo";

const productOptions = [
  "Frozen Green Peas",
  "American Sweet Corn",
  "Carrots",
  "Cauliflower",
  "Protein-Rich Soya Chaap",
  "Other",
];

const PHONE = "+91 89350 24024";
const WA_NUMBER = "918935024024";

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "India",
    state: "",
    pin_code: "",
    product_interest: [],
    other_products: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k, v) => setForm((s) => ({ ...s, [k]: v }));
  const toggleProduct = (p) =>
    setForm((s) => ({
      ...s,
      product_interest: s.product_interest.includes(p)
        ? s.product_interest.filter((x) => x !== p)
        : [...s.product_interest, p],
    }));

  const isIndia = form.country === "India";
  const hasOther = form.product_interest.includes("Other");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.country.trim() || !form.phone.trim()) {
      toast.error("Please fill your name, phone and country.");
      return;
    }
    if (isIndia && !form.state.trim()) {
      toast.error("Please select your state.");
      return;
    }
    setSubmitting(true);
    try {
      const payload = { ...form };
      if (!isIndia) {
        payload.state = "";
        payload.pin_code = "";
      }
      if (!hasOther) payload.other_products = "";
      await submitInquiry(payload);
      // Open WhatsApp with the inquiry pre-filled — delivered to +91 89350 24024
      try {
        const lines = [
          "*New inquiry — Mr. Frozen website*",
          "",
          `*Name:* ${payload.name}`,
          payload.company ? `*Company:* ${payload.company}` : null,
          `*Email:* ${payload.email}`,
          `*Phone / WhatsApp:* ${payload.phone}`,
          `*Country:* ${payload.country}`,
          payload.state ? `*State:* ${payload.state}` : null,
          payload.pin_code ? `*PIN code:* ${payload.pin_code}` : null,
          payload.product_interest?.length ? `*Products of interest:* ${payload.product_interest.join(", ")}` : null,
          payload.other_products ? `*Other:* ${payload.other_products}` : null,
          payload.message ? `*Message:* ${payload.message}` : null,
        ].filter(Boolean).join("\n");
        const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`;
        window.open(waUrl, "_blank", "noopener,noreferrer");
      } catch (_e) { /* non-blocking */ }
      setDone(true);
      toast.success("Inquiry received. A WhatsApp chat has opened — tap send to notify our sales team.");
      setForm({
        name: "", company: "", email: "", phone: "",
        country: "India", state: "", pin_code: "",
        product_interest: [], other_products: "", message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Could not send. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="inquiry" data-testid="inquiry-section" className="border-b border-[#DCE6DF] bg-[#FDFDF9]">
      <div className="px-6 md:px-12 lg:px-24 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="mf-eyebrow">10 — Request a quote</p>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.05]">
            Tell us what you need.<br />We&apos;ll quote within 1 working day.
          </h2>
          <p className="mt-5 text-[#475E4D] leading-relaxed">
            Share your requirement and our team will reply with pricing, spec
            sheet and sample availability.
          </p>

          <div className="mt-8 border border-[#DCE6DF] bg-[#FFFFFF] p-5" data-testid="warehousing-note">
            <div className="flex items-start gap-3">
              <Warehouse className="w-5 h-5 text-[#1E5631] mt-0.5 shrink-0" />
              <div>
                <p className="font-heading text-base font-semibold text-[#0F1A12] leading-snug">
                  Warehousing &amp; storage on offer
                </p>
                <p className="mt-1 text-sm text-[#475E4D] leading-relaxed">
                  We also have warehousing facilities for cold storage and frozen products.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 border border-[#DCE6DF] bg-[#FFFFFF] p-5" data-testid="shipping-note">
            <p className="font-heading text-base font-semibold text-[#0F1A12] leading-snug">
              Dispatch &amp; delivery
            </p>
            <p className="mt-1 text-sm text-[#475E4D] leading-relaxed">
              We have our own temperature-controlled shipping facilities
              available.
            </p>
          </div>

          <div className="mt-10 space-y-4 border-t border-[#DCE6DF] pt-8">
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#475E4D]">Samples</p>
              <p className="text-sm text-[#0F1A12] text-right">Available on request for serious buyers</p>
            </div>
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#475E4D]">Prefer to talk?</p>
              <div className="text-sm text-[#0F1A12] text-right">
                <a className="block hover:text-[#1E5631]" href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
                <a className="block hover:text-[#1E5631]" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">WhatsApp us</a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          {done ? (
            <div data-testid="inquiry-success" className="border border-[#1E5631] bg-[#FFFFFF] p-8 md:p-12">
              <CheckCircle2 className="w-10 h-10 text-[#1E5631]" />
              <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight">Inquiry received.</h3>
              <p className="mt-3 text-[#475E4D] max-w-md">
                Thank you. Our team will reach out to you within 1 working day.
                In the meantime you can also reach us directly via the contact
                section below.
              </p>
              <button
                data-testid="inquiry-send-another"
                onClick={() => setDone(false)}
                className="mt-6 border border-[#0F1A12] text-[#0F1A12] hover:bg-[#0F1A12] hover:text-[#FDFDF9] px-5 py-2.5 text-sm font-medium lift"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form
              data-testid="b2b-inquiry-form"
              noValidate
              onSubmit={onSubmit}
              className="border border-[#DCE6DF] bg-[#FFFFFF] p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              <Field label="Full name *">
                <Input data-testid="inquiry-name" value={form.name} onChange={(e) => update("name", e.target.value)} required placeholder="Your name" className="rounded-none" />
              </Field>
              <Field label="Company">
                <Input data-testid="inquiry-company" value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Company / brand" className="rounded-none" />
              </Field>
              <Field label="Email *">
                <Input data-testid="inquiry-email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@company.com" className="rounded-none" />
              </Field>
              <Field label="Phone / WhatsApp *">
                <Input data-testid="inquiry-phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} required placeholder="+91 98XXXXXXXX" className="rounded-none" />
              </Field>

              <Field label="Country *">
                <Select value={form.country} onValueChange={(v) => update("country", v)}>
                  <SelectTrigger data-testid="inquiry-country" className="rounded-none">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRIES.map((c) => (
                      <SelectItem key={c} value={c} data-testid={`country-option-${c.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              {isIndia ? (
                <Field label="State *">
                  <Select value={form.state} onValueChange={(v) => update("state", v)}>
                    <SelectTrigger data-testid="inquiry-state" className="rounded-none">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[280px]">
                      {INDIAN_STATES.map((s) => (
                        <SelectItem key={s} value={s} data-testid={`state-option-${s.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              ) : (
                <Field label="&nbsp;"><div /></Field>
              )}

              {isIndia && (
                <Field label="PIN code">
                  <Input
                    data-testid="inquiry-pincode"
                    value={form.pin_code}
                    onChange={(e) => update("pin_code", e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                    placeholder="e.g. 209601"
                    inputMode="numeric"
                    maxLength={6}
                    className="rounded-none"
                  />
                </Field>
              )}

              <div className="md:col-span-2">
                <Label className="text-xs font-mono uppercase tracking-[0.2em] text-[#1E5631]">Products of interest</Label>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {productOptions.map((p) => {
                    const checked = form.product_interest.includes(p);
                    return (
                      <label
                        key={p}
                        data-testid={`inquiry-product-${p.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className={`flex items-center gap-2 border px-3 py-2 cursor-pointer lift text-sm ${
                          checked
                            ? "border-[#1E5631] bg-[#1E5631]/5 text-[#0F1A12]"
                            : "border-[#DCE6DF] bg-[#FFFFFF] text-[#475E4D] hover:border-[#0F1A12]"
                        }`}
                      >
                        <Checkbox checked={checked} onCheckedChange={() => toggleProduct(p)} className="rounded-none" />
                        {p}
                      </label>
                    );
                  })}
                </div>

                {hasOther && (
                  <div className="mt-4 border border-[#1E5631]/30 bg-[#1E5631]/5 p-4" data-testid="other-products-block">
                    <Label className="text-xs font-mono uppercase tracking-[0.2em] text-[#1E5631]">Tell us what you&apos;re looking for</Label>
                    <Input
                      data-testid="inquiry-other-products"
                      value={form.other_products}
                      onChange={(e) => update("other_products", e.target.value)}
                      placeholder="Specify the product, spec or packaging you need"
                      className="rounded-none mt-2 bg-[#FFFFFF]"
                    />
                    <p className="mt-3 text-xs text-[#475E4D] leading-relaxed">
                      Or talk to us directly &mdash; we&apos;ll help work out the spec on the call.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href={`tel:${PHONE.replace(/\s/g, '')}`}
                        data-testid="inquiry-other-call"
                        className="inline-flex items-center gap-1.5 bg-[#0F1A12] text-[#FDFDF9] hover:bg-[#1E5631] px-3 py-2 text-xs font-medium lift"
                      >
                        <Phone className="w-3.5 h-3.5" /> Call {PHONE}
                      </a>
                      <a
                        href={`https://wa.me/${WA_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="inquiry-other-whatsapp"
                        className="inline-flex items-center gap-1.5 bg-[#FFFFFF] border border-[#0F1A12] text-[#0F1A12] hover:bg-[#0F1A12] hover:text-[#FDFDF9] px-3 py-2 text-xs font-medium lift"
                      >
                        <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                <Field label="Message">
                  <Textarea
                    data-testid="inquiry-message"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Anything else you&apos;d like to share &mdash; packaging spec, target market, frequency, etc."
                    rows={5}
                    className="rounded-none"
                  />
                </Field>
              </div>

              <div className="md:col-span-2">
                <div className="text-xs text-[#475E4D] leading-relaxed">
                  By submitting, you allow Mr. Frozen to contact you about your inquiry. We don&apos;t share your details.
                </div>
              </div>

              <div className="md:col-span-2 flex items-center justify-between pt-2">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#475E4D]">
                  Response in &lt; 24h on working days
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="inquiry-submit"
                  className="inline-flex items-center gap-2 bg-[#1E5631] hover:bg-[#164024] disabled:opacity-60 text-[#FDFDF9] px-6 py-3.5 text-sm font-medium lift"
                >
                  {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {submitting ? "Sending…" : "Send inquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-2">
    <Label className="text-xs font-mono uppercase tracking-[0.2em] text-[#1E5631]" dangerouslySetInnerHTML={{ __html: label }} />
    {children}
  </div>
);
