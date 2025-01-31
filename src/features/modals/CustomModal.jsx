import { Error } from "../../Ui/SVGs/Svg";

function CustomModal({ text }) {
  return (
    <div className="app-modal">
    <div className="absolute flex w-[300px] flex-col items-center p-4 shadow-2xl rounded-xl gap-y-2">
      <div>
    <Error width={50} height={50} />
      </div>
      <p2 className="text-center text-sm">{text}</p2>
    </div>
    </div>
  );
}

export default CustomModal;
