import Icon from "./Icon";
import Search from "../../features/Search/Search";
import LoginButton from "../Buttons/loginButton";
import Cart from "../../features/Cart/Cart";
import Line from "../Other/Line";
import { memo } from "react";

function HeaderTop() {

  return (
    <div
      className="flex bg-white z-30 items-center justify-between py-2 2xl:mx-auto 2xl:w-[90rem]"
    >
      <div className="flex items-center max-xl:w-full">
        <Icon />
        <Search />
      </div>
      <div className="flex items-center max-xl:hidden">
        <LoginButton />
        <Line />
        <Cart />
      </div>
    </div>
  );
}

export default memo(HeaderTop);
