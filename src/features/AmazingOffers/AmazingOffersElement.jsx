import { memo } from "react";
import formatPrice from "../../services/formatPrice";
import toPersianNumber from "../../services/toPersianNumber";

/* eslint-disable react/prop-types */
function AmazingOffersElement({ product }) {
  const price = product.default_variant.price?.rrp_price;
  const discountPrice = product.default_variant.price?.selling_price;
  const discount = (((price - discountPrice) * 100) / price).toFixed(0);

  console.log(price);

  return (
    <a
      href={`https://www.digikala.com/${product.url.uri}`}
      target="_blank"
      className="h-full w-40 bg-white p-2 text-[var(--text-color)]"
    >
      <div className="h-[55%] w-full">
        <img
          className="h-full w-full object-contain"
          src={product.images.main.webp_url}
          alt={product.tittle_en}
        />
      </div>
      <h4 className="line-clamp-2">{product.title_fa}</h4>
      <div className="flex items-center justify-between py-2">
        {discountPrice !== price ? (
          <span className="rounded-full bg-[var(--color-red1)] px-2 py-0.5 text-white">
            {toPersianNumber(discount)}%
          </span>
        ) : (
          <span></span>
        )}
        {price === undefined ? (
          <>
            <span className="text-sm font-bold text-[var(--text-color)]">
              ناموجود
            </span>
          </>
        ) : (
          <>
            <div className="flex flex-col">
              <span className="flex items-center gap-1">
                {formatPrice(discountPrice / 10)}
                <span className="text-[8px] font-bold">تومان</span>
              </span>
              {discountPrice !== price && (
                <span className="text-[var(--color-gray3)] line-through">
                  {formatPrice(price / 10)}
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </a>
  );
}

export default memo(AmazingOffersElement);
