import { useSelector } from "react-redux";
import ProductPrice from "./ProductPrice";

function LittleProductBox() {
  const { data , color } = useSelector((store) => store.theProductReducer);
  return (
    <div className="sticky top-52 h-[340px] w-full max-w-[350px] rounded-2xl border-2 border-[var(--color-gray3)] bg-[var(--color-gray1)] p-4 max-md:hidden">
      <div className="flex gap-2 border-b-2 border-[var(--color-gray3)] py-5">
        <div className="w-[50%] overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-contain"
            src={data.images.main.webp_url}
            alt={data.title_en}
          />
        </div>
        <div>
          <h4 className="my-2 line-clamp-2 h-12 leading-6 font-bold text-[var(--text-color)]">
            {data.title_fa}
          </h4>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full"
             style={{backgroundColor : `${color.hex_code}`}}
            ></div>
            <span>{color.title}</span>
          </div>
        </div>
      </div>
        <ProductPrice />
    </div>
  );
}

export default LittleProductBox;
