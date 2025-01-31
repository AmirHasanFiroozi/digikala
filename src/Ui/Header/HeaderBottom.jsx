import { memo } from "react";
import ProductCategory from "../../features/ProductCategoryBox/ProductCategory";
import ChooseCityButton from "../Buttons/ChooseCityButton";
import Line from "../Other/Line";
import NavLinks from "./NavLinks";
import QuestionsAndSellInDigikala from "./QuestionsAndSellInDigikala";

function HeaderBottom() {
  return (
    <div className="2xl:w-[90rem] 2xl:mx-auto flex items-center justify-between z-20 relative">
      <div className="flex items-center relative max-xl:hidden w-full">
        <ProductCategory />
        <Line />
        <NavLinks />
        <Line />
        <QuestionsAndSellInDigikala />
        <div className="bg-(--color-mainred) h-0.5 rounded-md absolute bottom-0 transition-[0.3s] w-0"></div>
      </div> 
      <div className="py-2 max-xl:w-full">
        <ChooseCityButton />
      </div>
    </div>
  );
}

export default memo(HeaderBottom);
