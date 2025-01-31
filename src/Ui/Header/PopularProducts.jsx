import { useRef } from "react";
import ArrowLeftButton from "../Buttons/ArrowLeftButton";
import ArrowRightButton from "../Buttons/ArrowRightButton";
import { ArrowLeft, Fire } from "../SVGs/Svg";
import { useEffect } from "react";
import { useState } from "react";
import useSize from "../../Hooks/useSize";

function PopularProducts() {
  const [value, setValue] = useState(0);
  const [listWidth, setListWidth] = useState(0);
  const [boxWidth, setBoxWith] = useState(0);
  const [width] = useSize();
  const list = useRef();
  const box = useRef();
  const style = {
    transform: `translatex(${value}px)`,
  };

  useEffect(function () {
    setListWidth(list.current.offsetWidth);
    setBoxWith(box.current.offsetWidth);
  }, [width]);

  function ArrowLeftClickHandler() {
    setValue(value + 150);
  }
  function ArrowRightClickHandler() {
    setValue(value - 150);
  }

  return (
    <>
      <h3 className="mt-2 flex items-center gap-2 py-2 text-lg">
        <Fire width={23} height={21} />
        جستجو های پرطرفدار
      </h3>
      <div ref={box} className="relative w-full overflow-hidden">
        <div className="absolute top-0.5 left-0 z-10">
          {listWidth > boxWidth && listWidth - boxWidth > value && (
            <ArrowLeftButton onClick={ArrowLeftClickHandler} />
          )}
        </div>
        <div className="absolute top-0.5 right-0 z-10">
          {value > 0 && <ArrowRightButton onClick={ArrowRightClickHandler} />}
        </div>
        <ul
          ref={list}
          style={style}
          className="text-(text-color) relative z-0 inline-flex items-center gap-1 text-sm font-bold transition"
        >
          <li className="flex cursor-pointer items-center gap-1 rounded-3xl border-1 border-(--color-gray3) px-4 py-2 text-nowrap">
            بوکت
            <ArrowLeft />
          </li>
          <li className="flex cursor-pointer items-center gap-1 rounded-3xl border-1 border-(--color-gray3) px-4 py-2 text-nowrap">
            هفت سین سنگ مصنویی
            <ArrowLeft />
          </li>
          <li className="flex cursor-pointer items-center gap-1 rounded-3xl border-1 border-(--color-gray3) px-4 py-2 text-nowrap">
            ماسک بینی نابینا
            <ArrowLeft />
          </li>
          <li className="flex cursor-pointer items-center gap-1 rounded-3xl border-1 border-(--color-gray3) px-4 py-2 text-nowrap">
            تنگ ماهی شیشه‌ای
            <ArrowLeft />
          </li>
          <li className="flex cursor-pointer items-center gap-1 rounded-3xl border-1 border-(--color-gray3) px-4 py-2 text-nowrap">
            تنگ ماهی شیشه‌ای
            <ArrowLeft />
          </li>
        </ul>
      </div>
    </>
  );
}

export default PopularProducts;
