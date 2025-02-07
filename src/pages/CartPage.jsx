import { useSelector } from "react-redux";
import MobileHeader from "../Ui/Header/MobileHeader";
import CartBox from "../features/Cart/CartBox";
import Search from "../features/Search/Search";
import { useNavigate } from "react-router-dom";
import useSize from "../Hooks/useSize";
import { useLayoutEffect, useState } from "react";

function CartPage() {
  const { cart } = useSelector((store) => store.cartReducer);
  const navigate = useNavigate();
  const [width] = useSize();
  const [changeSize, setChangeSize] = useState(width > 1280);

  useLayoutEffect(
    function () {
      if (width > 1280) {
        setChangeSize(true);
      }
      if (changeSize === true) {
        navigate("/");
      }
    },
    [width, changeSize, navigate],
  );

  return (
    <div>
      <div className="p-2">
        <Search />
      </div>
      <main className="h-[75vh]">
        <CartBox cart={cart} />
      </main>
      <MobileHeader />
    </div>
  );
}

export default CartPage;
