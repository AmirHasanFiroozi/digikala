import formatPrice from "../../services/formatPrice";
import toPersianNumber from "../../services/toPersianNumber";

/* eslint-disable react/prop-types */
function AmazingOffersElement({ product }) {
    const price = product.default_variant.price?.rrp_price / 10;
    const discountPrice = product.default_variant.price?.selling_price / 10;
    const discount = (((price - discountPrice)*100)/price).toFixed(0);

  return (
    <a
      href={`https://www.digikala.com/${product.url.uri}`}
      target="_blank"
      className="h-full w-40 bg-white p-2 text-(--text-color)"
    >
      <div className="h-[55%] w-full">
        <img
          className="h-full w-full object-contain"
          src={product.images.main.webp_url}
          alt={product.tittle_en}
        />
      </div>
      <h4 className="line-clamp-2">{product.title_fa}</h4>
      <div className="flex py-2 items-center justify-between">
        {discountPrice !== price ? (
          <span className="bg-(--color-mainred) rounded-full text-white py-0.5 px-1">{toPersianNumber(discount)}%</span>
        ) : (
          <span></span>
        )}
        <div className="flex flex-col">
        <span className="flex items-center gap-1">{formatPrice(discountPrice)}<span className="font-bold text-[8px]">تومان</span></span>
        {discountPrice !== price && <span className="text-(--color-gray3) line-through">{formatPrice(price)}</span>}
        </div>
      </div>
    </a>
  );
}

export default AmazingOffersElement;
