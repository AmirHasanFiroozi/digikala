import { useEffect, useRef, useState } from "react";
import Message from "../../Ui/Message/Message";
import { Cart as CartIcon } from "../../Ui/SVGs/Svg";
import { useSelector } from "react-redux";
import CartBox from "./CartBox";
import useSize from "../../Hooks/useSize";

function Cart() {
  const { cart } = useSelector((store) => store.cartReducer);
  const [showBox, setShowBox] = useState(false);
  const [CartIconPosition, setCartIconPosition] = useState({ left: 0, top: 0 });
  const [width] = useSize();
  const cartIcon = useRef();

  function hoverOnCartIcon() {
    setShowBox(true);
  }

  function leaveCartIcon() {
    setShowBox(false);
  }

  useEffect(
    function () {
      const posLeft = cartIcon.current.getBoundingClientRect().left;
      const posTop = cartIcon.current.getBoundingClientRect().top;
      setCartIconPosition({ left: posLeft, top: posTop });
    },
    [width],
  );

  return (
    <div className="relative">
      <div
        className="flex h-7 w-7 cursor-pointer items-center justify-center"
        ref={cartIcon}
        onMouseEnter={hoverOnCartIcon}
        onMouseLeave={leaveCartIcon}
      >
        <CartIcon width={23} height={23} />
        <div
          className={`absolute h-[400px] w-[400px] overflow-hidden rounded-xl bg-white shadow ${showBox ? "visible opacity-100" : "invisible opacity-0"}`}
          style={{
            left: `${CartIconPosition.left - 20}px`,
            top: `${CartIconPosition.top - 70}px`,
            transitionDuration: "0.3s",
          }}
        >
          <CartBox cart={cart} />
        </div>
      </div>
      <Message number={cart ? cart.length : 0} showBox={showBox} />
    </div>
  );
}

export default Cart;
