import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "./categorySlice";
import { memo } from "react";

function RightMenu({ device }) {
  const category = useSelector((store) => store.category.category);
  const dispatch = useDispatch();

  function MouseEnterEventHandler(ev) {
    dispatch(setCategory(ev.target.getAttribute("data-category")));
  }
  function clockCategoryHandler(ev) {
    dispatch(setCategory(ev.target.getAttribute("data-category")));
  }

  return (
    <div
      dir="ltr"
      className="h-full w-[200px] overflow-y-auto bg-(--color-gray1) max-xl:w-28"
    >
      <ul dir="rtl" className="w-full max-xl:text-[10px] max-xl:text-center">
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={device === "mobile" ? undefined : MouseEnterEventHandler}
          className={`p-3 ${category === "phone" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap`}
          data-category="phone"
        >
          موبایل
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={device === "mobile" ? undefined : MouseEnterEventHandler}
          className={`p-3 ${category === "digital" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap`}
          data-category="digital"
        >
          کالای دیجیتال
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={device === "mobile" ? undefined : MouseEnterEventHandler}
          className={`p-3 ${category === "home" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap`}
          data-category="home"
        >
          خانه و آشپزخانه
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={device === "mobile" ? undefined : MouseEnterEventHandler}
          className={`p-3 ${category === "cosmeticsAnsHealth" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap`}
          data-category="cosmeticsAnsHealth"
        >
          آرایشی بهداشتی
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={device === "mobile" ? undefined : MouseEnterEventHandler}
          className={`p-3 ${category === "carAndMotorBice" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap`}
          data-category="carAndMotorBice"
        >
          خودرو و موتور سیکلت
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={device === "mobile" ? undefined : MouseEnterEventHandler}
          className={`p-3 ${category === "electric" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap`}
          data-category="electric"
        >
          لوازم خانگی برقی
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={device === "mobile" ? undefined : MouseEnterEventHandler}
          className={`p-3 ${category === "tools" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap`}
          data-category="tools"
        >
          ابزار آلات و تجهیزات
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={device === "mobile" ? undefined : MouseEnterEventHandler}
          className={`p-3 ${category === "booksAndStationery" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap`}
          data-category="booksAndStationery"
        >
          کتاب و لوازم تحریر
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={device === "mobile" ? undefined : MouseEnterEventHandler}
          className={`p-3 ${category === "travelAndExercise" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap`}
          data-category="travelAndExercise"
        >
          ورزش و سفر
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={device === "mobile" ? undefined : MouseEnterEventHandler}
          className={`p-3 ${category === "giftCart" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap`}
          data-category="giftCart"
        >
          کارت هدیه و گیفت کارت
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={device === "mobile" ? undefined : MouseEnterEventHandler}
          className={`p-3 ${category === "edible" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap`}
          data-category="edible"
        >
          کالای خوراکی و اساسی
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={device === "mobile" ? undefined : MouseEnterEventHandler}
          className={`p-3 ${category === "kids" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap`}
          data-category="kids"
        >
          اسباب بازی کودک و نوزاد
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={device === "mobile" ? undefined : MouseEnterEventHandler}
          className={`p-3 ${category === "native" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap`}
          data-category="native"
        >
          محصولات بومی و محلی
        </li>
      </ul>
    </div>
  );
}

export default memo(RightMenu);
