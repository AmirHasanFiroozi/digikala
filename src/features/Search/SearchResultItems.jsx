import { useDispatch } from "react-redux";
import { requestProducts } from "../ProductRequest";
import { Search } from "../../Ui/SVGs/Svg";


/* eslint-disable react/prop-types */
function SearchResultItems({ Category }) {
  const dispatch = useDispatch();

  function clickSearchResultHandler() {
    dispatch(requestProducts(Category.keyword));
    window.location.href = "/products";
  }

  return (
    <li key={Category.category.id}>
      <div className="flex gap-1" onClick={clickSearchResultHandler}>
        <div className="mt-1">
          <Search />
        </div>
        <div>
          {Category.keyword}
          <div>
            در دسته‌ی{" "}
            <span className="text-[var(--color-blue1)]">
              {Category.category.title_fa}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default SearchResultItems;
