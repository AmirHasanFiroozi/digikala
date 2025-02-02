import { useDispatch } from "react-redux";
import { closeSearchBox } from "../../features/Search/searchSlice";
import { memo, useEffect, useState } from "react";

function FullCover() {
  const dispatch = useDispatch();
  const [top ,setTop ] =useState(0);

  useEffect(function(){
    setTop(window.scrollY);
  },[])

  return (
    <div
      onClick={(ev) => {
        ev.preventDefault();
        dispatch(closeSearchBox());
      }}
      to="/"
      className="top-0 absolute left-0 z-10 h-screen w-screen cursor-auto bg-gray-800 opacity-50"
      style={{top : top}}
    ></div>
  );
}

export default memo(FullCover);
