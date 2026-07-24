import { Helmet } from "react-helmet-async";
import { SITE } from "@/config/site";

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  image,
  noindex = false,
}) {
  const pageTitle = title || SITE.defaultTitle;
  const pageDescription = description || SITE.defaultDescription;
  const pageKeywords = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords || SITE.defaultKeywords.join(", ");

  const pageCanonical = canonical || SITE.url;
  const pageImage = image || SITE.logo;

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      <link rel="canonical" href={pageCanonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:image" content={pageImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
    </Helmet>
  );
}