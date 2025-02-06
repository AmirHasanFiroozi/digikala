import { useDispatch } from "react-redux";
import { setColor } from "./productSlice";

/* eslint-disable react/prop-types */
function ProductColor({ color, colorSelected }) {
    const dispatch = useDispatch()
    function selectColor(){
        dispatch(setColor(color));
    }
  return (
    <div
    onClick={selectColor}
      className="h-10 w-10 rounded-full flex items-center justify-center cursor-pointer"
      style={{
        outline: `${color.id === colorSelected.id ? "3px solid #19bfd3" : "1px solid lightgray"}`,
      }}
    >
      <div
      className="w-8 h-8 rounded-full shadow"
        style={{
          backgroundColor: `${color.hex_code}`,
          padding: "2px",
        }}
      ></div>
    </div>
  );
}

export default ProductColor;
