import toPersianNumber from "../../services/toPersianNumber";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

/* eslint-disable react/prop-types */
function CartBox({ cart }) {
  return (
    <div className="overflow-y-auto h-[85%] max-xl:h-full">
      {cart.length === 0 ? (
        <div className="flex h-full w-full items-center justify-center">
          <h4 className="justify-center text-left">سبد خرید شما خالی است</h4>
        </div>
      ) : (
        <div className="p-4 pb-16">
          <h3 className="absolute top-2 right-2 text-[10px] text-[var(--text-color)] max-xl:top-15">
            {toPersianNumber(cart.length)} کالا
          </h3>
          {cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
            <CartTotal cart={cart} />
        </div>
      )}
    </div>
  );
}

export default CartBox;
