import { ArrowLeft } from "../../../Ui/SVGs/Svg";
import CategoryList from "./CategoryList";

/* eslint-disable react/prop-types */
function CategoryItems({ Items, device }) {
  return (
    <>
      <h4
        className={`flex cursor-pointer flex-wrap items-center gap-1 pb-5 text-[13px] text-[var(--color-blue)]`}
      >
        {Items.title}
        <ArrowLeft width={10} height={10} />
      </h4>
      <div className={`flex ${device === "mobile" ? "flex-col" : "gap-4"}`}>
        {Items.maxDesktopColumn >= 1 && (
          <div className={`flex flex-col`}>
            {Items.items.map((item, i) => {
              if (item.colNumber === 1) {
                return <CategoryList item={item} device={device} key={i} />;
              }
            })}
          </div>
        )}
        {Items.maxDesktopColumn >= 2 && (
          <div className={`flex flex-col`}>
            {Items.items.map((item, i) => {
              if (item.colNumber === 2) {
                return <CategoryList item={item} device={device} key={i} />;
              }
            })}
          </div>
        )}
        {Items.maxDesktopColumn >= 3 && (
          <div className={`flex flex-col`}>
            {Items.items.map((item, i) => {
              if (item.colNumber === 3) {
                return <CategoryList item={item} device={device} key={i} />;
              }
            })}
          </div>
        )}
        {Items.maxDesktopColumn >= 4 && (
          <div className={`flex flex-col`}>
            {Items.items.map((item, i) => {
              if (item.colNumber === 4) {
                return <CategoryList item={item} device={device} key={i} />;
              }
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default CategoryItems;
