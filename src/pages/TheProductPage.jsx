import { useParams } from "react-router-dom";
import Header from "../Ui/Header/Header";
import TopAdvertisement from "../features/Advertisement/TopAdvertisement";
import { useEffect } from "react";
import { fetchTheProduct } from "../features/Products/TheProduct/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductImageBox from "../features/Products/TheProduct/ProductImageBox";
import ProdcutInformationBox from "../features/Products/TheProduct/ProdcutInformationBox";
import { Shop } from "../Ui/SVGs/Svg";
import ProductCommentBox from "../features/Products/TheProduct/ProductCommentBox";
import TheProductPageModal from "../features/modals/TheProductPageModal";

function TheProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector(
    (store) => store.theProductReducer,
  );

  useEffect(
    function () {
      dispatch(fetchTheProduct(id));
    },
    [dispatch, id],
  );

  return (
    <>
      {isLoading === true ? (
        <div
          className={`absolute ${isLoading ? "z-full visible top-0 left-0 flex h-full w-full items-center justify-center bg-white opacity-100" : "invisible h-0 w-0 opacity-0 transition-[0.2s]"}`}
        >
          <span className="loader"></span>
        </div>
      ) : isLoading === false && error === "" && data.id ? (
        <>
          <TopAdvertisement />
          <Header />
          <main className="wholePageItemsContainer relative top-18 px-4 max-xl:top-4">
            <div className="flex items-center justify-between py-5 text-sm text-[var(--text-color)]">
              <div className="flex items-center">
                {data.breadcrumb.slice(0, -1).map((url, i) => (
                  <div key={i}>
                    <a
                      className="font-bold"
                      href={`https://www.digikala.com/${url.url.uri}`}
                      target="_blank"
                    >
                      {url.title}
                    </a>
                    <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                  </div>
                ))}
              </div>
              <a
                className="flex items-center gap-1 text-[12px] max-md:hidden"
                href="https://www.digikala.com/landings/seller-introduction/"
                target="_blank"
              >
                در دیجی کالا بفروشید
                <Shop />
              </a>
            </div>
            <div className="flex justify-between max-lg:flex-col">
              <ProductImageBox />
              <ProdcutInformationBox />
            </div>
            <div className="mt-5 flex flex-col">
              <ProductCommentBox />
            </div>
          </main>
        </>
      ) : (
        <span>{error}</span>
      )}
      <TheProductPageModal />
    </>
  );
}

export default TheProductPage;
