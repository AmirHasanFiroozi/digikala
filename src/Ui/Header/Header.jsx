import HeaderTop from "./HeaderTop";
import HeaderButton from "./HeaderBottom";
import { memo } from "react";

function Header() {
  return (
    <header
      className="relative z-50 flex w-full flex-col bg-white px-2 shadow"
    >
      <HeaderTop />
      <HeaderButton />
    </header>
  );
}

export default memo(Header);
