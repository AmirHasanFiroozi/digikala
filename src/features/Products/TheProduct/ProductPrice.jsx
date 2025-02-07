import formatPrice from "../../../services/formatPrice";
import toPersianNumber from "../../../services/toPersianNumber";
import { CircleError } from "../../../Ui/SVGs/Svg";
import { useSelector } from "react-redux";
import AddToCartButton from "../../../Ui/Buttons/AddToCartButton";
import AddToCartBadges from "./AddToCartBadges";

function ProductPrice() {
  const { data , color } = useSelector((store) => store.theProductReducer);
  const price = data.variants[0].price?.rrp_price;
  const discountPrice = data.variants[0].price?.selling_price;
  const discount =
    price === discountPrice
      ? 0
      : Math.floor(((price - discountPrice) / price) * 100);

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
      <AddToCartBadges />
      <AddToCartButton data={data} color={color} />
    </div>
  );
}

export default ProductPrice;
