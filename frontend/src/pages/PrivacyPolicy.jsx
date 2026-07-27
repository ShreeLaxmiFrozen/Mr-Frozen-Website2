import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";

import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

export default function PrivacyPolicy() {
  return (
  <>
    <SEO
      title="Privacy Policy | Shree Laxmi Frozen Foods"
      description="Read the Privacy Policy of Shree Laxmi Frozen Foods."
      canonical="https://www.shreelaxmifrozenfoods.com/privacy-policy"
    />

    <Nav />

    <main className="min-h-screen bg-[#FDFDF9] text-[#0F1A12]">
      <div className="max-w-3xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-heading font-semibold">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-[#0F1A12]/60">
          Effective Date: 27 July 2026
        </p>

        <div className="mt-10 space-y-8 text-[15px] leading-8 text-[#0F1A12]/85">

          <section>
            <p>
              Shree Laxmi Frozen Foods respects your privacy and is committed
              to protecting the information you share with us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Information We Collect
            </h2>

            <p>
              We may collect information you voluntarily provide through our
              enquiry form, including:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name (if provided)</li>
              <li>Message or enquiry details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your enquiries.</li>
              <li>Communicate regarding our products or services.</li>
              <li>Improve customer support.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Information Sharing
            </h2>

            <p>
              We do not sell, rent or trade your personal information.
              Information may be shared only when required by law or when
              necessary to operate our business services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Data Security
            </h2>

            <p>
              We take reasonable measures to protect the information submitted
              through our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              External Links
            </h2>

            <p>
              Our website may contain links to third-party websites. We are
              not responsible for their privacy practices or content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Contact
            </h2>

            <p>
              If you have any questions regarding this Privacy Policy,
              please contact us at:
            </p>

            <p className="mt-4 font-medium">Shree Laxmi Frozen Foods</p>

            <p>
              Email{" "}
              <a
                href="mailto:shreelaxmifrozenfoods1@gmail.com"
                className="underline"
              >
                shreelaxmifrozenfoods1@gmail.com
              </a>
            </p>

          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Copyright & Intellectual Property
            </h2>

            <p>
              All product photographs, videos, logos, trademarks and website
              content are the intellectual property of Shree Laxmi Frozen Foods
              unless otherwise stated. The "Mr. Frozen" brand name and associated
              trademarks are the property of Shree Laxmi Frozen Foods or their
              respective owners. Unauthorized reproduction, distribution,
              modification or commercial use of any content is prohibited without
              prior written permission
            </p>
          </section>

          <p className="text-sm text-[#0F1A12]/60">
            Last Updated: 27 July 2026
          </p>

          <div className="pt-6">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-[#0F1A12]/75 hover:text-[#0F1A12]"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </div>
    </main>

    <Footer />
  </>
);
}