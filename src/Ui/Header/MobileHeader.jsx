import { NavLink } from "react-router-dom";
import { Cart, Category, Home, User } from "../SVGs/Svg";
import { memo } from "react";

function MobileHeader() {
  return (
    <ul className="hidden fixed right-0 bottom-0 left-0 w-full z-30 items-center bg-[var(--color-gray1)] text-[var(--color-gray4)] max-xl:flex">
      <li className="flex w-[25%] items-center py-2 transition hover:bg-white hover:text-[var(--color-red)]">
        <NavLink
          className="flex w-full flex-col items-center"
          to="/"
          style={({ isActive }) => {
            return isActive ? { color: "black" } : {};
          }}
        >
          <Home />
          خانه
        </NavLink>
      </li>
      <li className="flex w-[25%] items-center py-2 transition hover:bg-white hover:text-[var(--color-red)]">
        <NavLink
          className="flex w-full flex-col items-center"
          to="/category"
          style={({ isActive }) => {
            return isActive ? { color: "black" } : {};
          }}
        >
          <Category />
          دسته بندی
        </NavLink>
      </li>
      <li className="flex w-[25%] items-center py-2 transition hover:bg-white hover:text-[var(--color-red)]">
        <NavLink
          className="flex w-full flex-col items-center"
          to="/cart"
          style={({ isActive }) => {
            return isActive ? { color: "black" } : {};
          }}
        >
          <Cart />
          سبد خرید
        </NavLink>
      </li>
      <li className="flex w-[25%] items-center py-2 transition hover:bg-white hover:text-[var(--color-red)]">
        <NavLink
          className="flex w-full flex-col items-center"
          to="/user"
          style={({ isActive }) => {
            return isActive ? { color: "black" } : {};
          }}
        >
          <User />
          دیجی‌کالای من
        </NavLink>
      </li>
    </ul>
  );
}

export default memo(MobileHeader);
