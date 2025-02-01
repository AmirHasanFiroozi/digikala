import { useSelector } from "react-redux";
import AmazingTitle from "./AmazingTitle";
import ArrowRightButton from "../../Ui/Buttons/ArrowRightButton";
import ArrowLeftButton from "../../Ui/Buttons/ArrowLeftButton";
import { useEffect, useRef, useState } from "react";
import AmazingOffersElement from "./AmazingOffersElement";
import useSize from "../../Hooks/useSize";
import SeeAllBox from "./SeeAllBox";

function AmazingOfferBox() {
  const [left , setLeft] = useState(0); 
  const [innerWidth , setInnerWidth] = useState(0);
  const [otherWidth , setOtherWidth] = useState(0);
  const data = useSelector((store) => store.homePageWidgets.data);
  const amazingOffers = data.filter((data) => data.type === "products_cart")[0]
    .data;
  const innerBox = useRef(null);
  const otherBox = useRef(null);
  const [width] = useSize();

  useEffect(function () {
    setInnerWidth(innerBox.current.offsetWidth);
    setOtherWidth(otherBox.current.offsetWidth);
  }, [width]);

  function goToLeft(){
     setLeft(left + 168) 
  }
  function goToRight(){
    setLeft(left - 168)
  }

  console.log(left);

  return (
    <div ref={otherBox} className="mainContainer relative my-5 flex h-[250px] overflow-hidden rounded-xl bg-(--color-red) p-4">
      <div ref={innerBox} className="relative flex transition-[0.2s]" style={{transform : `translate3d(${left}px , 0 , 0)`}}>
        <AmazingTitle amazingOffers={amazingOffers} />
        <div className="flex h-full gap-1">
          {amazingOffers.products.map((product) => (
            <AmazingOffersElement product={product} key={product.id} />
          ))}
        </div>
        <SeeAllBox amazingOffers={amazingOffers} />
      </div>
      <div className={`absolute top-26 left-2 ${left + otherWidth >= innerWidth ? "hidden" : ""}`}>
        <ArrowLeftButton onClick={goToLeft} />
      </div>
      <div className={`absolute top-26 right-2 ${left <= 0 ? "hidden" : ""}`}>
        <ArrowRightButton onClick={goToRight}/>
      </div>
    </div>
  );
}

export default AmazingOfferBox;
