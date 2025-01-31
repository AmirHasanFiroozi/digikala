import { useDispatch } from "react-redux";
import { closeSearchBox } from "../../features/Search/searchSlice";
import { memo } from "react";

function FullCover() {
  const dispatch = useDispatch();
  return (
    <div
      onClick={(ev) => {
        ev.preventDefault();
        dispatch(closeSearchBox());
      }}
      to="/"
      className="absolute top-0 right-0 max-xl:hidden bottom-0 left-0 z-10 h-full w-full cursor-auto bg-gray-800 opacity-50"
    ></div>
  );
}

export default memo(FullCover);
