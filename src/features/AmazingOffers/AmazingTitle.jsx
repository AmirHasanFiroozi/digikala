import amazingsPic from "../../assets/icons/Amazings.svg";
import amazingPic from "../../assets/icons/Amazing.svg";
import { ArrowLeft } from "../../Ui/SVGs/Svg";
import Timer from "../../Utils/timer";

/* eslint-disable react/prop-types */
function AmazingTitle({ amazingOffers }) {
  return (
    <div>
      <a
        href={"https://www.digikala.com/" + amazingOffers.see_more_url.uri}
        target="_blank"
        className="flex w-32 flex-col items-center justify-between text-center"
      >
        <img
          className="h-20 w-20"
          src={amazingsPic}
          alt={amazingOffers.title}
        />
        <Timer finishTime="Sat Feb 02 2025 03:37:47 GMT+0330 (Iran Standard Time)" />
        <img src={amazingPic} alt={amazingOffers.title} />
        <span
          className="flex items-center gap-1 text-white"
          href={"https://www.digikala.com/" + amazingOffers.see_more_url.uri}
        >
          مشاهده همه
          <ArrowLeft width={10} height={10} />
        </span>
      </a>
    </div>
  );
}

export default AmazingTitle;
