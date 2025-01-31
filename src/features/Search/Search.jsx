import { useDispatch, useSelector } from "react-redux";
import { Search as SearchIcon } from "../../Ui/SVGs/Svg";
import image from "../../assets/icons/digikalaText.svg";
import SearchBox from "./SearchBox";
import { openSearchBox } from "./searchSlice";
import useSize from "../../Hooks/useSize";

function Search() {
  const searchBox = useSelector((store) => store.search.searchBox);
  const dispatch = useDispatch();
  const width = useSize();

  return (
    <div className="relative w-[600px] max-w-full max-xl:w-full">
        <button
          onClick={(ev) => {
            ev.preventDefault();
            dispatch(openSearchBox());
          }}
          to="search"
          className="flex h-10 w-full cursor-pointer items-center gap-x-1 rounded-lg bg-(--color-gray1) p-4 text-(--text-color)"
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
          <SearchBox />
        </div>
    </div>
  );
}

export default Search;
