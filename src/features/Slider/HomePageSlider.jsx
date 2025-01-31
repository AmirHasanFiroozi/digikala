import { memo } from "react";
import { useSelector } from "react-redux";
import Slider from "./Slider";

function HomePageSlider() {
  const data = useSelector(store=>store.homePageWidgets.data);
  const slides = data.filter(data => data.type === "full_slider");
 
   if(!slides || slides.length === 0) return <div>There is no slide</div>;

  return <Slider slides={slides[0].data} />;
}

export default memo(HomePageSlider);
