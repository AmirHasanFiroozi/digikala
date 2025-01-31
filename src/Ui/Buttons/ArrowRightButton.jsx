import { ArrowRight } from "../SVGs/Svg";

function ArrowRightButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center rounded-3xl border-1 border-(--color-gray2) bg-white w-9 h-9 hover:scale-110 transition-[0.3s] text-(--text-color)"
    >
      <ArrowRight width={12} height={12}/>
    </button>
  );
}

export default ArrowRightButton;
