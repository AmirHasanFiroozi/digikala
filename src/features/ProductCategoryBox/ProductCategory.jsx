import { HanmberMenu } from "../../Ui/SVGs/Svg";
import MenuBox from "./MenuBox";
import { useDispatch, useSelector } from "react-redux";
import { closeMegaMenu, openMegaMenu } from "./categorySlice";

/* eslint-disable react/prop-types */
function BoxCategory() {
  const dispatch = useDispatch();
  const megaMenu = useSelector(store => store.category.megaMenu)

  function MouseEnterEventHandler() {
    dispatch(openMegaMenu());
    document.body.classList.add('lock-page')
  }
  function MouseLeaveEventHandler(){
    dispatch(closeMegaMenu())
    document.body.classList.remove('lock-page')
  }
  return (
    <>
      <div
        onMouseEnter={MouseEnterEventHandler}
        onMouseLeave={MouseLeaveEventHandler}
        className="relative text-sm"
      >
        <div
          className={`flex cursor-pointer items-center gap-0.5 py-3 hover:text-[var(--color-red)] ${megaMenu ? "text-[var(--color-red)]": "" }`}
        >
          <HanmberMenu />
          دسته‌بندی کالاها
        </div>
        <MenuBox />
      </div>
    </>
  );
}

export default BoxCategory;
