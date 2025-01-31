import { useDispatch, useSelector } from "react-redux";
import PopularProducts from "../../Ui/Header/PopularProducts";
import { closeSearchBox, fetchGetSearchResult } from "./searchSlice";
import { X } from "../../Ui/SVGs/Svg";

function SearchBox({ device }) {
  const dispatch = useDispatch();
  const searchBox = useSelector((store) => store.search.searchBox);

  function search(ev) {
    console.log(ev.target.value)
    dispatch(fetchGetSearchResult(ev.target.value));
  }
  function closeSearchBoxFunc() {
    dispatch(closeSearchBox());
  }
  return (
    <div
      className={`absolute z-50 overflow-y-auto bg-white p-4 shadow-xl transition-[0.3s] ${device === "mobile" ? `left-0 h-full w-full ${searchBox ? "visible top-0 opacity-100" : "invisible top-[100%] opacity-0"}` : `top-0 right-0 left-0 max-h-[80vh] rounded-2xl ${searchBox ? "visible opacity-100" : "invisible opacity-0"}`}`}
    >
      <div className="flex items-center border-b-1 border-b-blue-400 pb-2">
        <input
          type="text"
          placeholder="جستجو"
          onChange={search}
          className="w-full border-0 outline-0"
        />
        <button onClick={closeSearchBoxFunc}>
          <X />
        </button>
      </div>
      <PopularProducts />
    </div>
  );
}

export default SearchBox;
