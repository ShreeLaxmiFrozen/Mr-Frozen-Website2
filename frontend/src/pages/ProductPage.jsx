import { useParams } from "react-router-dom";
import products from "@/data/products";

export default function ProductPage() {
  const { productId } = useParams();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-20 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold">{product.name}</h1>

      <p className="mt-6 text-lg text-gray-700">
        {product.desc}
      </p>

      {product.packs && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">
            Available Pack Sizes
          </h2>

          <div className="flex flex-wrap gap-3">
            {product.packs.map((pack) => (
              <span
                key={pack}
                className="px-4 py-2 rounded bg-black text-white"
              >
                {pack}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}