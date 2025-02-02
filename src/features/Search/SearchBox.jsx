import { useDispatch, useSelector } from "react-redux";
import PopularProducts from "../../Ui/Header/PopularProducts";
import { closeSearchBox, fetchGetSearchResult } from "./searchSlice";
import { X } from "../../Ui/SVGs/Svg";
import { useEffect, useRef, useState } from "react";
import SearchResult from "./SearchResult";

function SearchBox({ device }) {
  const dispatch = useDispatch();
  const { searchBox } = useSelector(
    (store) => store.search  ,
  );
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchBox && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchBox]);

  function search(ev) {
    if(ev.target.value.length > 1 ){
      dispatch(fetchGetSearchResult(ev.target.value));
    }
  }
  function closeSearchBoxFunc() {
    dispatch(closeSearchBox());
  }
  return (
    <div
      className={`bg-white z-50 p-5 transition-[10s] ${device === "mobile" ? `fixed top-0 left-0 right-0 bottom-0 ${searchBox ? "" : "top-[100%]"}` : `absolute top-0 w-full rounded-2xl shadow ${searchBox ? "opacity-100 visible" : "opacity-0 invisible"}`}`}
    >
        <>
          <div className="flex items-center border-b-1 border-b-blue-400 pb-2">
            <input
              ref={inputRef}
              type="text"
              placeholder="جستجو"
              onKeyDown={search}
              className="w-full border-0 outline-0"
            />
            <button onClick={closeSearchBoxFunc}>
              <X />
            </button>
          </div>
          <SearchResult />
          <PopularProducts />
        </>
    </div>
  );
}

export default SearchBox;
