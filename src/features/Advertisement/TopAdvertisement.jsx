import { memo } from "react";

function TopAdvertisement() {
  return (
    <div className="relative z-50 h-15 w-full min-w-0 overflow-hidden max-xl:h-[25px]">
      <a href="https://www.digikala.com/landing/home-makeover/?&promo_name=%DB%8C%D9%87+%D8%AF%DA%A9%D9%88%D8%B1+%D9%86%D9%88+-+hw+-+%D8%A8%D9%87%D9%85%D9%86+1403&promo_position=all_mega_menu_top&promo_creative=193587&bCode=193587"  target="_blank">
        <img
          className="h-full w-full object-cover"
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a6adfca00fdffacfc768794ca77cff1b5dd0a808_1738270450.jpg?x-oss-process=image/quality,q_95/format,webp"
          alt="advertisement"
        />
      </a>
    </div>
  );
}

export default memo(TopAdvertisement);
