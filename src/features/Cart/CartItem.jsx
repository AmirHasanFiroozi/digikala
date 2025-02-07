import { useSelector } from "react-redux";
import formatPrice from "../../services/formatPrice";
import toPersianNumber from "../../services/toPersianNumber";
import AddToCartButton from "../../Ui/Buttons/AddToCartButton";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function CartItem({ cartItem }) {
  const navigate = useNavigate();
  const price = cartItem.default_variant.price?.rrp_price;
  const discountPrice = cartItem.default_variant.price?.selling_price;
  const discount =
    price === discountPrice
      ? 0
      : Math.floor(((price - discountPrice) / price) * 100);

  function clickProductHandler() {
    navigate(`/products/${cartItem.id}`);
  }

  return (
    <div
      onClick={clickProductHandler}
      className="flex h-[200px] w-full cursor-pointer justify-between border-b-2 border-b-[var(--color-gray2)] py-3"
    >
      <div className="h-full w-[35%] rounded-xl">
        <img
          className="h-full w-full object-contain"
          src={cartItem.images.main.webp_url[0]}
          alt={cartItem.title_fa}
        />
      </div>
      <div className="flex w-[60%] flex-col justify-between">
        <h3 className="line-clamp-2 text-sm font-bold">{cartItem.title_fa}</h3>
        <div>
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
          <div className="flex justify-end">
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold">
                {formatPrice(discountPrice / 10)}
              </span>
              <span className="text-[8px] font-bold">تومان</span>
            </div>
          </div>
        </div>
        <AddToCartButton data={cartItem} color={cartItem.color} />
      </div>
    </div>
  );
}

export default CartItem;
