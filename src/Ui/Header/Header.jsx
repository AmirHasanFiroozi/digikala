import HeaderTop from "./HeaderTop";
import HeaderButton from "./HeaderBottom";
import { memo } from "react";
import useScrollSituation from "../../Hooks/useScrollSituation";

function Header() {
  const scrollSituation = useScrollSituation();

  return (
    <header
      className="customTransition sticky top-16 z-50 flex w-full flex-col bg-white px-2 shadow max-xl:top-0"
      // style={{ height: `${scrollSituation === "down" && window.scrollY > 200 ? "60px" : "110px"}` }}
    >
      <HeaderTop />
      <HeaderButton />
    </header>
  );
}

export default memo(Header);
