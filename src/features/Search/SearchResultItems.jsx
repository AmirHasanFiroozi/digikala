import { useDispatch } from "react-redux";
import { requestSearchResultProduct } from "../ProductRequest";
import { Search } from "../../Ui/SVGs/Svg";
import { useNavigateToProductPage } from "../../Hooks/useCustomNavigationToProductPage";


/* eslint-disable react/prop-types */
function SearchResultItems({ Category }) {
  const dispatch = useDispatch();
  const navigateTpProductPage = useNavigateToProductPage();

  function clickSearchResultHandler() {
    dispatch(requestSearchResultProduct(Category.category.title_fa));
    navigateTpProductPage;
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
