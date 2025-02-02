import TopAdvertisement from "../features/Advertisement/TopAdvertisement";
import Header from "../Ui/Header/Header";
import FullCover from "../Ui/Other/FullCover";
import Cover from "../Ui/Other/Cover";
import InstallDigikala from "../features/Advertisement/InstallDigikala";
import MobileHeader from "../Ui/Header/MobileHeader";
import { useSelector } from "react-redux";
import HomePageSlider from "../features/slider/HomePageSlider"
import AmazingOfferBox from "../features/AmazingOffers/AmazingOfferBox";
import AllCategories from "../features/AllCategories/AllCategories";

function AppLayout() {
  const megaMenu = useSelector(store => store.category.megaMenu)
  const searchBox = useSelector(store => store.search.searchBox);

  return (
    <>
      {searchBox && <FullCover />}
      {megaMenu && <Cover />}

      <TopAdvertisement />
      <InstallDigikala />
      <Header />
      <MobileHeader />
      <main className="max-sm:py-4 relative top-16 max-xl:top-0">
        <HomePageSlider />
        <AmazingOfferBox />
        <AllCategories />
      </main>
      <footer className="w-full flex relative top-16 items-center justify-center text-2xl h-[100px]">footer</footer>
    </>
  );
}

export default AppLayout;
