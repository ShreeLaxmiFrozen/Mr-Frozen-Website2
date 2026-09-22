import { Helmet } from "react-helmet-async";
import { SITE } from "@/config/site";

export default function OrganisationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.companyName,
        url: SITE.url,
        logo: SITE.logo,

        brand: {
          "@id": `${SITE.url}/#mr-frozen`,
        },
      },

      {
        "@type": "Brand",
        "@id": `${SITE.url}/#mr-frozen`,
        name: SITE.brandName,
        url: SITE.url,
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}