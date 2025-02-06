import { memo } from "react";
import ProductCategory from "../../features/ProductCategoryBox/ProductCategory";
import ChooseCityButton from "../Buttons/ChooseCityButton";
import Line from "../Other/Line";
import NavLinks from "./NavLinks";
import QuestionsAndSellInDigikala from "./QuestionsAndSellInDigikala";

function HeaderBottom() {

  return (
    <div
      className="customTransition relative z-20 flex items-center justify-between bg-white 2xl:mx-auto 2xl:w-[90rem]"
      // style={{ top: `${scrollSituation === "down" && window.scrollY > 200 ? "-50" : "0"}px` }}
    >
      <div className="relative flex w-full items-center max-xl:hidden">
        <ProductCategory />
        <Line />
        <NavLinks />
        <Line />
        <QuestionsAndSellInDigikala />
        <div className="absolute bottom-0 h-0.5 w-0 rounded-md bg-[var(--color-mainred)] transition-[0.3s]"></div>
      </div>
      <div className="py-2 max-xl:w-full">
        <ChooseCityButton />
      </div>
    </div>
  );
}

export default memo(HeaderBottom);
