import toPersianNumber from "../../services/toPersianNumber";
import { Star } from "../../Ui/SVGs/Svg";
import formatPrice from "../../services/formatPrice";
import specialSell from "../../assets/icons/SpecialSell.svg";

/* eslint-disable react/prop-types */
function Product({ product, number, gridNumber }) {
  const price = product.default_variant.price?.rrp_price;
  const discountPrice = product.default_variant.price?.selling_price;

  const discount =
    price === discountPrice
      ? 0
      : Math.floor(((price - discountPrice) / price) * 100);
  return (
    <div
      className="customTransition relative flex h-[400px] w-full cursor-pointer flex-col gap-2 border-(--color-gray2) pt-10 p-4 hover:shadow-2xl"
      style={{
        borderLeftWidth: `${gridNumber !== 0 && number % gridNumber === 0 ? "0px" : "1px"}`,
        borderBottomWidth: "1px",
        borderStyle: "solid",
      }}
    >
      <div className="absolute top-3 right-5">
        {
            product.default_variant.price?.badge?.title === "فروش ویژه" && <img className="w-18" src={specialSell} alt="special sell" />

        }
      </div>
      <div className="flex h-[60%] w-full items-center justify-center rounded-xl">
        <img
          className="h-full w-full object-contain"
          src={product.images.main.webp_url}
          alt=""
        />
      </div>
      <h2 className="my-2 line-clamp-2 leading-6 font-bold text-(--text-color)">
        {product.title_fa}
      </h2>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-1">
          <span>
            {toPersianNumber(((product.rating.rate * 5) / 100).toFixed(1))}
          </span>
          <Star />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span>
          {discount !== 0 && (
            <span className="rounded-full bg-(--color-red1) px-2 py-0 text-white">
              {toPersianNumber(discount)}%
            </span>
          )}
        </span>
        { price === undefined ? (
            <>
             <span className="font-bold text-(--text-color) text-xl">ناموجود</span>
            </>
        ):(
        <div className="flex flex-col text-lg">
          <div className="flex items-center gap-1">
            <span>{formatPrice(discountPrice / 10)}</span>
            <span className="text-[8px] font-bold">تومان</span>
          </div>
          <div>
             {
               discount !== 0 && <span className="text-(--color-gray3) line-through">{formatPrice(price / 10)}</span>
             }
          </div>
        </div>)
}
      </div>
    </div>
  );
}

export default Product;
