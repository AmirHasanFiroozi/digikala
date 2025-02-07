import formatPrice from "../../services/formatPrice";

function CartTotal({ cart }) {
  const totalPrice = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + (currentValue.number * currentValue.default_variant.price?.selling_price),
    0,
  );

  return (
    <div className=" h-[15%] max-xl:bottom-11 max-xl:h-[10%] absolute right-0 bottom-0 left-0 flex justify-between items-end rounded-tl-xl rounded-tr-xl bg-white p-2 shadow">
      <button className="h-full w-[50%] rounded-xl bg-[var(--color-red)] font-bold text-white">
        نهایی کردن خرید
      </button>
      <div className="font-bold text-xl flex items-center gap-1">
        <span>{formatPrice(totalPrice / 10)}</span>
      <span className="text-[8px] font-bold">تومان</span>
        </div>
    </div>
  );
}

export default CartTotal;
