import { useNavigate } from "react-router-dom";
import Search from "../features/Search/Search";
import MobileHeader from "../Ui/Header/MobileHeader";
import useSize from "../Hooks/useSize";
import { useEffect, useLayoutEffect, useState } from "react";
import MenuBox from "../features/ProductCategoryBox/MenuBox";

function CategoryPage() {
  const navigate = useNavigate();
  const [width] = useSize();
  const [changeSize, setChangeSize] = useState(width > 1280);

  useLayoutEffect(
    function () {
      if (width > 1280) {
        setChangeSize(true);
      }
      if (changeSize === true) {
        navigate("/");
      }
    },
    [width, changeSize, navigate],
  );

  return (
    <div>
      <div className="p-2">
        <Search />
      </div>
      <div className="h-[calc(100vh-108px)] relative w-full">
        <MenuBox device="mobile" />
      </div>
      <MobileHeader />
    </div>
  );
}

export default CategoryPage;
