import Message from "../../Ui/Message/Message";
import { Cart as CartIcon } from "../../Ui/SVGs/Svg";

function Cart() {
  return (
    <div className="relative">
      <CartIcon />
      <Message />
    </div>
  );
}

export default Cart;
