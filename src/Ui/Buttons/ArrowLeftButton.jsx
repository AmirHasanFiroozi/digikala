import { ArrowLeft } from "../SVGs/Svg";

function ArrowLeftButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center rounded-3xl border-1 border-[var(--color-gray2)] bg-white w-9 h-9 hover:scale-110 transition-[0.3s] text-[var(--text-color)]"
    >
      <ArrowLeft width={12} height={12}/>
    </button>
  );
}

export default ArrowLeftButton;
