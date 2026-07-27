import { Helmet } from "react-helmet-async";
import { SITE } from "@/config/site";

export default function ProductSchema({ product }) {
  if (!product) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [product.heroImage || product.img],
    description: product.desc,
    brand: {
      "@type": "Brand",
      name: SITE.brand,
    },
    manufacturer: {
      "@type": "Organization",
      name: SITE.company,
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