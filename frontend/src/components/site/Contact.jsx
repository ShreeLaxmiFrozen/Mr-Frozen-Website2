import React from "react";
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

const channels = [
  { icon: Mail,          label: "Email",     value: "shreelaxmifrozenfoods1@gmail.com", href: "mailto:shreelaxmifrozenfoods1@gmail.com", testid: "contact-email" },
  { icon: Phone,         label: "Phone",     value: "+91 89350 24024",                  href: "tel:+918935024024",                       testid: "contact-phone" },
  { icon: MessageCircle, label: "WhatsApp",  value: "Chat with sales",                  href: "https://wa.me/918935024024",              testid: "contact-whatsapp" },
  { icon: MapPin,        label: "Factory",   value: "Farrukhabad, Uttar Pradesh, India", href: "https://www.google.com/maps/dir/?api=1&destination=Shree+Laxmi+Frozen+Foods%2C+Village+Manikpur%2C+Farrukhabad%2C+Uttar+Pradesh&destination_place_id=ChIJc6qFhQQvnjkRkISRG9sYJh4", testid: "contact-address" },
];

export default function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="border-b border-[#DCE6DF] bg-[#FFFFFF]">
      <div className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-10">
          <div className="lg:col-span-6">
            <p className="mf-eyebrow">11 — Contact</p>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.05]">
              Talk to a human.<br />Same time zone as your kitchen.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 text-[#475E4D] leading-relaxed">
            We are happy to share specs, samples, factory walk-through videos and references on request. Our team will guide you through documentation and shipping.
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {channels.map((c) => {
            const Icon = c.icon;
            const external = c.href.startsWith("http");
            return (
              <a
                key={c.label}
                href={c.href}
                target={external ? "_blank" : undefined}
                rel="noreferrer"
                data-testid={c.testid}
                className="group relative border border-[#DCE6DF] bg-[#FDFDF9] p-6 md:p-7 min-h-[180px] flex flex-col justify-between overflow-hidden transition-colors duration-300 hover:bg-[#1E5631] hover:border-[#1E5631] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1E5631]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center w-10 h-10 border border-[#DCE6DF] bg-[#FFFFFF] group-hover:bg-[#E6B325] group-hover:border-[#E6B325] transition-colors">
                    <Icon className="w-5 h-5 text-[#1E5631] group-hover:text-[#0F1A12] transition-colors" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#475E4D] group-hover:text-[#FDFDF9] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="mt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#475E4D] group-hover:text-[#E6B325] transition-colors">{c.label}</p>
                  <p className="mt-2 font-heading font-semibold text-[#0F1A12] group-hover:text-[#FDFDF9] transition-colors break-words leading-snug text-[15px] sm:text-base md:text-[17px]">
                    {c.value}
                  </p>
                </div>
                {/* underline flourish on hover */}
                <span
                  aria-hidden="true"
                  className="absolute left-6 right-6 bottom-0 h-[2px] bg-[#E6B325] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
