import { Helmet } from "react-helmet-async";
import { SITE } from "@/config/site";

export default function OrganisationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.companyName,
    brand: {
      "@type": "Brand",
      name: SITE.brandName,
    },
    url: SITE.url,
    logo: SITE.logo,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}