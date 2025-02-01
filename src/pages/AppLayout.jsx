import TopAdvertisement from "../features/Advertisement/TopAdvertisement";
import Header from "../Ui/Header/Header";
import FullCover from "../Ui/Other/FullCover";
import Cover from "../Ui/Other/Cover";
import InstallDigikala from "../features/Advertisement/InstallDigikala";
import MobileHeader from "../Ui/Header/MobileHeader";
import { useSelector } from "react-redux";
import HomePageSlider from "../features/slider/HomePageSlider"
import AmazingOfferBox from "../features/AmazingOffers/AmazingOfferBox";

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
      <main className="max-sm:py-4">
        <HomePageSlider />
        <AmazingOfferBox />
      </main>
    </>
  );
}

export default AppLayout;
