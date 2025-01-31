import { HanmberMenu } from "../../Ui/SVGs/Svg";
import MenuBox from "./MenuBox";
import { useDispatch, useSelector } from "react-redux";
import { closeMegaMenu, openMegaMenu } from "./categorySlice";
import { memo } from "react";

/* eslint-disable react/prop-types */
function BoxCategory() {
  const dispatch = useDispatch();
  const megaMenu = useSelector(store => store.category.megaMenu)

  function MouseEnterEventHandler() {
    dispatch(openMegaMenu());
  }
  function MouseLeaveEventHandler(){
    dispatch(closeMegaMenu())
  }
  return (
    <>
      <div
        onMouseEnter={MouseEnterEventHandler}
        onMouseLeave={MouseLeaveEventHandler}
        className="relative text-sm"
      >
        <div
          className={`flex cursor-pointer items-center gap-0.5 py-3 hover:text-(--color-red) ${megaMenu ? "text-(--color-red)": "" }`}
        >
          <HanmberMenu />
          دسته‌بندی کالاها
        </div>
        <MenuBox />
      </div>
      {/* {hoverSituation && <Cover />} */}
    </>
  );
}

export default BoxCategory;
