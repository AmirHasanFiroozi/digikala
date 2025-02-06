import { useEffect, useState } from "react";
import formatPrice from "../../../services/formatPrice";
import toPersianNumber from "../../../services/toPersianNumber";
import { CircleError } from "../../../Ui/SVGs/Svg";
import { useSelector } from "react-redux";
import AddToCartButton from "../../../Ui/Buttons/AddToCartButton";

function ProductPrice() {
  const [product_badgesTop, setProduct_badgesTop] = useState(0);
  const { data } = useSelector((store) => store.theProductReducer);
  const price = data.variants[0].price?.rrp_price;
  const discountPrice = data.variants[0].price?.selling_price;
  const discount =
    price === discountPrice
      ? 0
      : Math.floor(((price - discountPrice) / price) * 100);

  useEffect(
    function () {
      const timer = setTimeout(() => {
        if (product_badgesTop - 28 <= -28 * data.product_badges.length) {
          setProduct_badgesTop(0);
        } else {
          setProduct_badgesTop((product_badgesTop) => product_badgesTop - 28);
        }
      }, 2000);

      () => clearTimeout(timer);
    },
    [product_badgesTop, data.product_badges.length],
  );
  return (
    <div className=" max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:flex max-md:bg-white max-md:flex-row-reverse max-md:justify-between max-md:px-4 max-md:py-3 max-md:z-40">
      <div className="pt-5">
        <div className="flex items-center justify-end gap-2">
          {discount !== 0 && (
            <span className="rounded-full bg-[var(--color-red1)] px-2 py-0 text-white">
              {toPersianNumber(discount)}%
            </span>
          )}
          {discount !== 0 && (
            <span className="text-[var(--color-gray3)] line-through">
              {formatPrice(price / 10)}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="cursor-pointer max-md:hidden">
            <CircleError />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold">
              {formatPrice(discountPrice / 10)}
            </span>
            <span className="text-[8px] font-bold">تومان</span>
          </div>
        </div>
      </div>
      <div className="mt-5 h-7 overflow-hidden max-md:hidden">
        <div
          className="flex flex-col"
          style={{
            transform: `translate3d(0,${product_badgesTop}px,0)`,
            transitionDuration: `0.5s`,
          }}
        >
          {data.product_badges.map((product_badge) => (
            <div className="flex h-7 items-center gap-2" key={product_badge.id}>
              <img
                className="w-4"
                src={product_badge.payload.svg_icon}
                alt={product_badge.payload.text}
              />
              <span style={{ color: `${product_badge.payload.text_color}` }}>
                {product_badge.payload.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <AddToCartButton />
    </div>
  );
}

export default ProductPrice;
