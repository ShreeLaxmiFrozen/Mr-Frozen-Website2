import { Helmet } from "react-helmet-async";
import { SITE } from "@/config/site";

export default function ProductSchema({ product }) {
  if (!product) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE.url}/products/${product.id}#product`,
    name: product.name,
    image: [product.heroImage || product.img],
    description: product.desc,

    brand: {
      "@type": "Brand",
      "@id": `${SITE.url}/#mr-frozen`,
      name: SITE.brand,
    },

    manufacturer: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.company,
      url: SITE.url,
    },

    url: `${SITE.url}/products/${product.id}`,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}