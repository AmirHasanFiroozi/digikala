import { memo } from "react";

/* eslint-disable react/prop-types */
function CategoryItem({ name , device }) {
  return (
    <li className={`${device === "mobile" ? "py-4":"py-2"} text-nowrap text-(--text-color) hover:text-(--color-red)`}>
      {name}
    </li>
  );
}

export default memo(CategoryItem);
