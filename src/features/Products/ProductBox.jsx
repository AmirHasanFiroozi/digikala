import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestProducts } from "../ProductRequest";
import Product from "./Product";
import ProductLoading from "./ProductLoading";
import useSize from "../../Hooks/useSize";

function ProductBox() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const gridElement = useRef(null);
  const [gridNumber, setGridNumber] = useState(0);
  const [width] = useSize();
  const {
    filter,
    isLoading,
    error,
    data,
    jetDelivery,
    shipBySeller,
    sellingStock,
  } = useSelector((store) => store.productReducer);

  useEffect(
    function () {
      const style = window.getComputedStyle(gridElement.current);
      const columns = style.gridTemplateColumns.split(" ").length;
      setGridNumber(columns);
    },
    [width],
  );

  function handleScroll() {
    console.log(window.innerHeight + document.documentElement.scrollTop);
    console.log(document.documentElement.scrollHeight);
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((page) => page + 1);
    }
  }

  useEffect(function () {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(
    function () {
      dispatch(
        requestProducts(
          page,
          jetDelivery === true ? "jetDelivery" : "",
          shipBySeller === true ? "shipBySeller" : "",
          sellingStock === true ? "sellingStock" : "",
        ),
      );
    },
    [page, dispatch, jetDelivery, shipBySeller, sellingStock],
  );

  return (
    <div className="flex w-[80%] flex-col max-lg:w-full">
      <div
        ref={gridElement}
        className="mb-10 grid w-full grid-cols-4 border-t-[1px] border-[var(--color-gray2)] max-xl:grid-cols-3 max-lg:w-full max-lg:grid-cols-2 max-sm:grid-cols-1"
      >
        {filter ? (
          <>
            {isLoading === true && (
              <>
                {Array.from({ length: 8 }, (_, index) => index).map((_, i) => (
                  <ProductLoading
                    number={i + 1}
                    key={i}
                    gridNumber={gridNumber}
                  />
                ))}
              </>
            )}
          </>
        ) : (
          <>
            {isLoading === true && (
              <>
                {data?.map((product, i) => (
                  <Product
                    product={product}
                    key={product.id}
                    number={i + 1}
                    gridNumber={gridNumber}
                  />
                ))}
                {Array.from({ length: 8 }, (_, index) => index).map((_, i) => (
                  <ProductLoading
                    number={i + 1}
                    key={i}
                    gridNumber={gridNumber}
                  />
                ))}
              </>
            )}
          </>
        )}
        {error && <span>{error}</span>}
        {isLoading === false &&
          error === "" &&
          data &&
          data.map((product, i) => (
            <Product
              product={product}
              key={product.id}
              number={i + 1}
              gridNumber={gridNumber}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductBox;
