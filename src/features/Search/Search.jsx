import { useDispatch } from "react-redux";
import { Search as SearchIcon } from "../../Ui/SVGs/Svg";
import image from "../../assets/icons/digikalaText.svg";
import SearchBox from "./SearchBox";
import { openSearchBox } from "./searchSlice";
import { useState } from "react";

function Search() {
  const dispatch = useDispatch();
  const [top , setTop] = useState(0);

  return (
    <div className="relative w-[600px] max-w-full max-xl:w-full">
        <button
          onClick={(ev) => {
            ev.preventDefault();
            dispatch(openSearchBox());
            setTop(window.scrollY);
          }}
          to="search"
          className="flex h-10 w-full cursor-pointer items-center gap-x-1 rounded-lg bg-[var(--color-gray1)] p-4 text-[var(--text-color)]"
        >
          <SearchIcon />
          <span className="cursor-text" type="text">
            جستجو
          </span>
          <span className="hidden max-xl:inline">در</span>
          <img
            className="hidden max-xl:inline"
            src={image}
            alt="digikala text image"
            width="60px"
          />
        </button>
        <div className="max-xl:hidden">
          <SearchBox top={top}/>
        </div>
    </div>
  );
}

export default Search;
