import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import ProductSchema from "@/components/seo/ProductSchema";
import { SITE } from "@/config/site";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import products from "../data/products";

export default function ProductPage() {
  const { productId } = useParams();

  const product = products.find((p) => p.id === productId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <>
        <SEO
          title="Product Not Found | Mr. Frozen"
          description="The requested product could not be found."
          canonical={`${SITE.url}/products/${productId}`}
          noindex
        />
        <Nav />

        <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-heading font-semibold text-[#0F1A12]">
            Product Not Found
          </h1>

          <p className="mt-4 text-[#475E4D]">
            The product you're looking for doesn't exist.
          </p>

          <Link
            to="/#products"
            className="mt-8 bg-[#1E5631] text-white px-6 py-3"
          >
            Back to Products
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id);

  return (
    <>
      <SEO
        title={product.seo?.title || `${product.name} | ${SITE.brand}`}
        description={product.seo?.description || product.desc}
        keywords={product.seo?.keywords}
        canonical={product.seo?.canonical || `${SITE.url}/products/${product.id}`}
      />

      <ProductSchema product={product} />
      <Nav />

      <main className="bg-[#FDFDF9]">

        {/* Breadcrumb */}

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-10">
          <div className="text-sm text-[#475E4D]">
            <Link
              to="/"
              className="hover:text-[#1E5631]"
            >
              Home
            </Link>

            <span className="mx-2">/</span>

            <Link
              to="/#products"
              className="hover:text-[#1E5631]"
            >
              Products
            </Link>

            <span className="mx-2">/</span>

            <span className="text-[#0F1A12] font-medium">
              {product.name}
            </span>
          </div>
        </div>

        {/* Product */}

        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-14">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div className="flex justify-center">
              <img
                src={product.heroImage || product.img}
                alt={product.name}
                className="max-h-[520px] w-auto object-contain drop-shadow-[0_20px_50px_rgba(15,26,18,0.18)]"
              />
            </div>

            <div>

              <p className="font-mono uppercase tracking-[0.25em] text-xs text-[#1E5631]">
                {product.tag}
              </p>

              <h1 className="mt-3 font-heading text-4xl md:text-5xl font-semibold leading-tight text-[#0F1A12]">
                {product.name}
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-[#475E4D]">
                {product.desc}
              </p>

              {product.badges && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="border border-[#1E5631]/30 px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] text-[#1E5631]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {product.packs && (
                <div className="mt-10">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#475E4D]">
                    Available Pack Sizes
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.packs.map((pack) => (
                      <span
                        key={pack}
                        className="bg-[#0F1A12] text-white px-4 py-2 font-heading"
                      >
                        {pack}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </section>

        {/* Overview */}

        {product.overview && (
          <section className="border-t border-[#DCE6DF]">
            <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-16">

              <h2 className="font-heading text-3xl font-semibold text-[#0F1A12]">
                Product Overview
              </h2>

              <p className="mt-6 leading-8 text-[#475E4D] text-lg">
                {product.overview}
              </p>

            </div>
          </section>
        )}

        {/* Related Products */}

        <section className="border-t border-[#DCE6DF] bg-[#FDFDF9]">

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">

                <h2 className="font-heading text-3xl font-semibold text-[#0F1A12]">
                    More from Mr. Frozen
                </h2>

                <div
                    className="mt-10 flex gap-8 overflow-x-auto pb-4 pr-20"
                    style={{
                        scrollSnapType: "x mandatory",
                        scrollbarWidth: "thin",
                    }}
                >

                    {relatedProducts.map((p) => (

                        <Link
                            key={p.id}
                            to={`/products/${p.id}`}
                            className="group min-w-[290px] max-w-[290px] flex-shrink-0 first:ml-1 last:pr-8"
                            style={{ scrollSnapAlign: "start" }}
                        >

                            <article className="bg-[#FDFDF9]">

                                <div className="aspect-square flex items-center justify-center overflow-hidden">

                                    <img
                                        src={p.heroImage || p.img}
                                        alt={p.alt || p.name}
                                        className="max-h-[90%] max-w-[90%] object-contain transition-transform duration-700 group-hover:scale-105"
                                    />

                                </div>

                                <div className="mt-5">

                                    <h3 className="font-heading text-xl font-semibold text-[#0F1A12] group-hover:text-[#1E5631] transition-colors">
                                        {p.name}
                                    </h3>

                                    <p className="mt-2 text-sm text-[#475E4D] leading-relaxed">
                                        {p.desc}
                                    </p>

                                    {p.badges && (

                                        <div className="mt-4 flex flex-wrap gap-2">

                                            {p.badges.map((badge) => (

                                                <span
                                                    key={badge}
                                                    className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#1E5631] border border-[#1E5631]/30 px-2 py-1 group-hover:bg-[#1E5631] group-hover:text-white transition"
                                                >
                                                    {badge}
                                                </span>

                                            ))}

                                        </div>

                                    )}

                                </div>

                            </article>

                        </Link>

                    ))}

                </div>

            </div>

        </section>

      </main>

      <Footer />
    </>
  );
}