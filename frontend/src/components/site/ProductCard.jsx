import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  className = "",
}) 
{

  const image = product.heroImage || product.img;
  return (
    <Link
      to={`/products/${product.id}`}
      className={`group block min-w-[290px] max-w-[290px] flex-shrink-0 first:ml-1 last:pr-8 ${className}`}
      style={{ scrollSnapAlign: "start" }}
    >
      <article className="bg-[#FDFDF9] h-full flex flex-col">

        <div className="aspect-square flex items-center justify-center overflow-hidden">

          <img
            src={image}
            alt={product.alt || product.name}
            loading="eager"
            fetchPriority="auto"
            draggable={false}
            className="
              max-h-[90%]
              max-w-[90%]
              object-contain
              transition-transform
              duration-300
              group-hover:scale-[1.03]
            "
          />

        </div>

        <div className="mt-5 flex flex-col flex-1">

          <h3
            className="
              font-heading
              text-xl
              font-semibold
              text-[#0F1A12]
              transition-colors
              duration-300
              group-hover:text-[#1E5631]
            "
          >
            {product.name}
          </h3>
          <div className="mt-2 min-h-[96px]">
            <p className="text-sm leading-relaxed text-[#475E4D]">
                {product.desc}
            </p>
          </div>

          {product.badges && (
            <div className="mt-4 flex flex-wrap gap-2">

              {product.badges.map((badge) => (
                <span
                  key={badge}
                  className="
                    border
                    border-[#1E5631]/30
                    px-2
                    py-1
                    text-[10px]
                    font-mono
                    uppercase
                    tracking-[0.18em]
                    text-[#1E5631]
                    transition-all
                    duration-300
                    group-hover:bg-[#1E5631]
                    group-hover:text-white
                "
                >
                  {badge}
                </span>
              ))}

            </div>
          )}

        </div>

      </article>
    </Link>
  );
}