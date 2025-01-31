import { memo } from "react";
import { ArrowLeft, Location } from "../SVGs/Svg";

function ChooseCityButton() {
  return (
    <button className="flex items-center gap-1 rounded-2xl bg-[#fef6ef] px-2 py-1 text-[#f67f17] max-xl:bg-white max-xl:w-full max-xl:justify-between max-xl:text-black">
      <div className="flex items-center text-nowrap">
        <Location />
        شهر خود را انتخاب کنید
      </div>
      <ArrowLeft className="hidden max-xl:block" width={13} height={13} />
    </button>
  );
}

export default memo(ChooseCityButton);
