import RightMenu from "./RightMenu";
import LeftMenu from "./LeftMenu";
import { useSelector } from "react-redux";
import Phone from "./Categories/Phone";
import Digital from "./Categories/Digital";
import Home from "./Categories/Home";
import CosmeticsAndHealth from "./Categories/CosmeticsAndHealth";
import CarAndMotorBice from "./Categories/CarAndMotorBice";
import Electric from "./Categories/Electric";
import Tools from "./Categories/Tools";
import BooksAndStationery from "./Categories/BooksAndStationery";
import TravelAndExercise from "./Categories/TravelAndExercise";
import Edible from "./Categories/Edible";
import GiftCart from "./Categories/GiftCart";
import Kids from "./Categories/Kids";
import Native from "./Categories/Native";

function MenuBox({ device }) {
  const { megaMenu, category } = useSelector((store) => store.category);

  return (
    <div
      className={`absolute flex ${device === "mobile" ? "top-0 left-0 h-full w-full" : `top-11 h-[400px] max-h-[80vh] ${megaMenu ? "visible opacity-100" : "invisible opacity-0"} z-20 shadow transition-[0.6s]`}`}
    >
      <RightMenu device={device} />
      <LeftMenu>
        {category === "phone" && <Phone device={device} />}
        {category === "digital" && <Digital device={device} />}
        {category === "home" && <Home device={device} />}
        {category === "cosmeticsAnsHealth" && (
          <CosmeticsAndHealth device={device} />
        )}
        {category === "carAndMotorBice" && <CarAndMotorBice device={device} />}
        {category === "electric" && <Electric device={device} />}
        {category === "tools" && <Tools device={device} />}
        {category === "booksAndStationery" && (
          <BooksAndStationery device={device} />
        )}
        {category === "travelAndExercise" && (
          <TravelAndExercise device={device} />
        )}
        {category === "giftCart" && <GiftCart device={device} />}
        {category === "edible" && <Edible device={device} />}
        {category === "kids" && <Kids device={device} />}
        {category === "native" && <Native device={device} />}
      </LeftMenu>
    </div>
  );
}

export default MenuBox;
