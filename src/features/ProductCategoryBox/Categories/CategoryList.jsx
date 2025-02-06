import { useState } from "react";
import CategoryListItem from "./CategoryListItem";
import { ArrowBottom, ArrowLeft, ArrowTop } from "../../../Ui/SVGs/Svg";

/* eslint-disable react/prop-types */
function CategoryList({ item, device }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <h3
        onClick={() => setShowDetails(!showDetails)}
        className={`text-md relative flex cursor-pointer items-center gap-1 py-4 font-bold text-nowrap transition hover:text-[var(--color-red)] ${device === "mobile" ? "justify-between px-0" : "px-2 before:absolute before:right-0 before:h-3 before:w-[0.2rem] before:rounded-2xl before:bg-(--color-red) before:content-['']"}`}
      >
        {item.itemTile}
        {showDetails && device === "mobile" && (
          <ArrowTop width={10} height={10} />
        )}
        {!showDetails && device === "mobile" && (
          <ArrowBottom width={10} height={10} />
        )}
        {device !== "mobile" && <ArrowLeft width={8} height={8} />}
      </h3>
      <ul
        className={`transition-[0.3s] ${!showDetails && device === "mobile" && "h-0 overflow-hidden p-0"} text-[12px] ${device === "mobile" ? "grid grid-cols-4 gap-x-5 border-b-[1px] border-[var(--color-gray3)] text-center max-sm:grid-cols-2" : ""}`}
      >
        {item.elements.map((element, i) => (
          <CategoryListItem device={device} name={element.name} key={i} />
        ))}
      </ul>
    </>
  );
}

export default CategoryList;
