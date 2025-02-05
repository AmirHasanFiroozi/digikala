import { useSelector } from "react-redux";
import { CircleError, Shop } from "../../../Ui/SVGs/Svg";
import toPersianNumber from "../../../services/toPersianNumber";
import formatPrice from "../../../services/formatPrice";
import { useEffect, useState } from "react";

function ProductPriceBox() {
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
        if (product_badgesTop - 28 <= -28 * (data.product_badges.length)) {
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
    <div className="w-[500px] rounded-2xl border-2 border-(--color-gray3) bg-(--color-gray1) p-5">
      <h2 className="pb-3 text-lg font-bold">فروشنده</h2>
      <div className="flex gap-2 border-b-2 border-(--color-gray3) pb-5 text-(--text-color)">
        <Shop width={25} height={25} />
        <div className="relative top-1 flex flex-col">
          <a
            href={data.variants[0].seller.url}
            target="_blank"
            className="pb-2 text-sm"
          >
            {data.variants[0].seller.title}
          </a>
          <div className="flex items-center gap-1">
            <span>عملکرد</span>
            <span style={{ color: `${data.variants[0].seller.grade.color}` }}>
              {data.variants[0].seller.grade.label}
            </span>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex items-center justify-end">
          {discount !== 0 && (
            <span className="rounded-full bg-(--color-red1) px-2 py-0 text-white">
              {toPersianNumber(discount)}%
            </span>
          )}
          {discount !== 0 && (
            <span className="text-(--color-gray3) line-through">
              {formatPrice(price / 10)}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="cursor-pointer">
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
      <div className="h-7 overflow-hidden mt-5">
        <div
          className="flex flex-col"
          style={{ transform: `translate3d(0,${product_badgesTop}px,0)` , transitionDuration : `0.5s` }}
        >
          {data.product_badges.map((product_badge) => (
            <div className="flex gap-2 h-7 items-center" key={product_badge.id}>
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
      <button className="py-3 text-white w-full flex items-center justify-center bg-(--color-red) mt-4 font-bold rounded-xl">افزودن به سبد خرید</button>
    </div>
  );
}

export default ProductPriceBox;
