import TopAdvertisement from "../features/Advertisement/TopAdvertisement";
import ProductBox from "../features/Products/ProductBox";
import FilterBox from "../features/Products/productFilter/FilterBox";
import Header from "../Ui/Header/Header";

function ProductPage() {
  return (
    <>
      <TopAdvertisement />
      <Header />
      <main className="wholePageItemsContainer px-5 relative top-16 my-10 flex max-lg:flex-col max-lg:my-5 gap-5 max-xl:top-0 max-sm:py-4">
        <FilterBox />
        <ProductBox />
      </main>
    </>
  );
}

export default ProductPage;
