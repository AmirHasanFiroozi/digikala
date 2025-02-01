import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "./categorySlice";
import { memo } from "react";
import {
  Phone,
  Laptop,
  Sofa,
  Makeup,
  Car,
  Furniture,
  Tools,
  Clothes,
  Ornaments,
  Medicine,
  Stationery,
  ExerciseAndHealth,
  Gift,
  Food,
  Baby,
  Native,
} from "../../Ui/SVGs/Svg";

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
      className="h-full w-[230px] overflow-y-auto bg-(--color-gray1) max-xl:w-28"
    >
      <ul dir="rtl" className="w-full max-xl:text-center max-xl:text-[10px]">
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={
            device === "mobile" ? undefined : MouseEnterEventHandler
          }
          className={`flex gap-2 p-3 ${category === "phone" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap max-xl:flex-col max-xl:items-center`}
          data-category="phone"
        >
          <Phone />
          موبایل
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={
            device === "mobile" ? undefined : MouseEnterEventHandler
          }
          className={`flex gap-2 p-3 ${category === "digital" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap max-xl:flex-col max-xl:items-center`}
          data-category="digital"
        >
          <Laptop />
          کالای دیجیتال
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={
            device === "mobile" ? undefined : MouseEnterEventHandler
          }
          className={`flex gap-2 p-3 ${category === "home" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap max-xl:flex-col max-xl:items-center`}
          data-category="home"
        >
          <Sofa />
          خانه و آشپزخانه
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={
            device === "mobile" ? undefined : MouseEnterEventHandler
          }
          className={`flex gap-2 p-3 ${category === "cosmeticsAnsHealth" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap max-xl:flex-col max-xl:items-center`}
          data-category="cosmeticsAnsHealth"
        >
          <Makeup />
          آرایشی بهداشتی
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={
            device === "mobile" ? undefined : MouseEnterEventHandler
          }
          className={`flex gap-2 p-3 ${category === "carAndMotorBice" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap max-xl:flex-col max-xl:items-center`}
          data-category="carAndMotorBice"
        >
          <Car />
          خودرو و موتور سیکلت
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={
            device === "mobile" ? undefined : MouseEnterEventHandler
          }
          className={`flex gap-2 p-3 ${category === "electric" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap max-xl:flex-col max-xl:items-center`}
          data-category="electric"
        >
          <Furniture />
          لوازم خانگی برقی
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={
            device === "mobile" ? undefined : MouseEnterEventHandler
          }
          className={`flex gap-2 p-3 ${category === "tools" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap max-xl:flex-col max-xl:items-center`}
          data-category="tools"
        >
          <Tools />
          ابزار آلات و تجهیزات
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={
            device === "mobile" ? undefined : MouseEnterEventHandler
          }
          className={`flex gap-2 p-3 ${category === "booksAndStationery" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap max-xl:flex-col max-xl:items-center`}
          data-category="booksAndStationery"
        >
          <Stationery />
          کتاب و لوازم تحریر
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={
            device === "mobile" ? undefined : MouseEnterEventHandler
          }
          className={`flex gap-2 p-3 ${category === "travelAndExercise" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap max-xl:flex-col max-xl:items-center`}
          data-category="travelAndExercise"
        >
          <ExerciseAndHealth />
          ورزش و سفر
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={
            device === "mobile" ? undefined : MouseEnterEventHandler
          }
          className={`flex gap-2 p-3 ${category === "giftCart" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap max-xl:flex-col max-xl:items-center`}
          data-category="giftCart"
        >
          <Gift />
          کارت هدیه و گیفت کارت
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={
            device === "mobile" ? undefined : MouseEnterEventHandler
          }
          className={`flex gap-2 p-3 ${category === "edible" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap max-xl:flex-col max-xl:items-center`}
          data-category="edible"
        >
          <Food />
          کالای خوراکی و اساسی
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={
            device === "mobile" ? undefined : MouseEnterEventHandler
          }
          className={`flex gap-2 p-3 ${category === "kids" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap max-xl:flex-col max-xl:items-center`}
          data-category="kids"
        >
          <Baby />
          اسباب بازی کودک و نوزاد
        </li>
        <li
          onClick={device === "mobile" ? clockCategoryHandler : undefined}
          onMouseEnter={
            device === "mobile" ? undefined : MouseEnterEventHandler
          }
          className={`flex gap-2 p-3 ${category === "native" ? "bg-white text-(--color-red)" : ""} transition max-xl:text-wrap max-xl:flex-col max-xl:items-center`}
          data-category="native"
        >
          <Native />
          محصولات بومی و محلی
        </li>
      </ul>
    </div>
  );
}

export default memo(RightMenu);
