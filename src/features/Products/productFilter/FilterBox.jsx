import { useDispatch, useSelector } from "react-redux";
import { requestProducts } from "../../ProductRequest";
import { useNavigate } from "react-router-dom";

function FilterBox() {
  const dispatch = useDispatch();
  const useNavigation = useNavigate();

  const { jetDelivery, shipBySeller, sellingStock } = useSelector(
    (store) => store.productReducer,
  );

  function jetDeliveryClickHandler() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(
      requestProducts(
        1,
        jetDelivery === false ? "jetDelivery" : "",
        shipBySeller === true ? "shipBySeller" : "",
        sellingStock === true ? "sellingStock" : "",
      ),
    );
  }
  function shipBySellerClickHandler() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(
      requestProducts(
        1,
        jetDelivery === true ? "jetDelivery" : "",
        shipBySeller === false ? "shipBySeller" : "",
        sellingStock === true ? "sellingStock" : "",
      ),
    );
  }
  function sellingStockClickHandler() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(
      requestProducts(
        1,
        jetDelivery === true ? "jetDelivery" : "",
        shipBySeller === true ? "shipBySeller" : "",
        sellingStock === false ? "sellingStock" : "",
      ),
    );
  }
  return (
    <div className="hideScrollbar sticky top-52 flex h-[300px] w-[20%] flex-col gap-3 rounded-2xl border-[1px] border-(--color-gray2) p-5 text-(--text-color) max-xl:top-46 max-lg:relative max-lg:top-0 max-lg:h-auto max-lg:w-full max-lg:flex-row max-lg:items-center max-lg:overflow-y-auto max-lg:border-0 max-lg:p-2">
      <h3 className="text-xl font-bold text-nowrap">فیلتر ها</h3>
      <div className="mt-6 flex items-center justify-between border-t-2 border-(--color-gray2) py-4 max-xl:p-2 max-lg:mt-0 max-lg:gap-2 max-lg:rounded-2xl max-lg:border-[1px]">
        <h4 className="text-sm text-nowrap">ارسال امروز</h4>
        <button
          onClick={jetDeliveryClickHandler}
          className={`relative h-5 w-10 rounded-2xl border-2 p-2 ${jetDelivery === true ? "border-[#19bfd3] bg-[#19bfd3]" : "border-(--text-color)"}`}
        >
          <span
            className={`absolute top-[50%] bottom-[50%] h-3 w-3 translate-y-[-50%] rounded-full ${jetDelivery === true ? "right-0.5 bg-white" : "left-0.5 bg-(--text-color)"}`}
          ></span>
        </button>
      </div>
      <div className="border-t-2 border-(--color-gray2) py-4 max-xl:p-2 max-lg:mt-0 max-lg:rounded-2xl max-lg:border-[1px]">
        <div className="flex items-center justify-between max-lg:gap-2">
          <h4 className="text-sm text-nowrap">ارسال فروشنده</h4>
          <button
            onClick={shipBySellerClickHandler}
            className={`relative h-5 w-10 rounded-2xl border-2 p-2 ${shipBySeller === true ? "border-[#19bfd3] bg-[#19bfd3]" : "border-(--text-color)"}`}
          >
            <span
              className={`absolute top-[50%] bottom-[50%] h-3 w-3 translate-y-[-50%] rounded-full ${shipBySeller === true ? "right-0.5 bg-white" : "left-0.5 bg-(--text-color)"}`}
            ></span>
          </button>
        </div>
        <h5 className="mt-1 text-sm text-(--color-gray3) max-lg:hidden">
          ارسال مستقیم و سریع تر
        </h5>
      </div>
      <div className="flex items-center justify-between border-t-2 border-(--color-gray2) py-4 max-xl:p-2 max-lg:mt-0 max-lg:gap-2 max-lg:rounded-2xl max-lg:border-[1px]">
        <h4 className="text-sm text-nowrap">فقط کالا های موجود</h4>
        <button
          onClick={sellingStockClickHandler}
          className={`relative h-5 w-10 rounded-2xl border-2 p-2 ${sellingStock === true ? "border-[#19bfd3] bg-[#19bfd3]" : "border-(--text-color)"}`}
        >
          <span
            className={`absolute top-[50%] bottom-[50%] h-3 w-3 translate-y-[-50%] rounded-full ${sellingStock === true ? "right-0.5 bg-white" : "left-0.5 bg-(--text-color)"}`}
          ></span>
        </button>
      </div>
    </div>
  );
}

export default FilterBox;
