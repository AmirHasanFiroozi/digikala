import { useSelector } from "react-redux";
import ProductPrice from "./ProductPrice";
import { Shop } from "../../../Ui/SVGs/Svg";

function ProductPriceBox() {
  const { data } = useSelector((store) => store.theProductReducer);

  return (
    <div className="max-w-[350px] w-full rounded-2xl border-2 border-[var(--color-gray3)] bg-[var(--color-gray1)] p-5 max-md:hidden">
      <h2 className="pb-3 text-lg font-bold">فروشنده</h2>
      <div className="flex gap-2 border-b-2 border-[var(--color-gray3)] pb-5 text-[var(--text-color)]">
        <Shop width={25} height={25} />
        <div className="relative top-1 flex flex-col">
          <a
            href={data.variants[0].seller.url}
            target="_blank"
            className="pb-2 text-sm"
          >
            {data.variants[0].seller.title}
          </a>
          <div className="flex items-center gap-1">
            <span>عملکرد</span>
            <span style={{ color: `${data.variants[0].seller.grade.color}` }}>
              {data.variants[0].seller.grade.label}
            </span>
          </div>
        </div>
      </div>
     <ProductPrice />
    </div>
  );
}

export default ProductPriceBox;
