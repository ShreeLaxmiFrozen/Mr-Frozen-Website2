import React from "react";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import SEO from "@/components/seo/SEO";
import OrganisationSchema from "@/components/seo/OrganisationSchema";
import { SITE } from "@/config/site";
import Marquee from "@/components/site/Marquee";
import About from "@/components/site/About";
import Products from "@/components/site/Products";
import Quality from "@/components/site/Quality";
import Capabilities from "@/components/site/Capabilities";
import FactoryTour from "@/components/site/FactoryTour";
import FullTour from "@/components/site/FullTour";
import Export from "@/components/site/Export";
import Awards from "@/components/site/Awards";
import Labelling from "@/components/site/Labelling";
import InquiryForm from "@/components/site/InquiryForm";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div data-testid="home-page" className="min-h-screen bg-[#FDFDF9] text-[#0F1A12]">
      <SEO
        title={SITE.defaultTitle}
        description={SITE.defaultDescription}
        canonical={SITE.url}
      />

      <OrganisationSchema />

      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Products />
        <Quality />
        <Capabilities />
        <FactoryTour />
        <Labelling />
        <FullTour />
        <Export />
        <Awards />
        <InquiryForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
