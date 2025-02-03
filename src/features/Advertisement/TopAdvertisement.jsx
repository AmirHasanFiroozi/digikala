import { memo } from "react";

function TopAdvertisement() {
  return (
    <div className="fixed top-0 z-50 h-16 w-full min-w-0 overflow-hidden max-xl:relative max-xl:h-[25px]">
      <a
        href="https://www.digikala.com/landing/art-piece/?&promo_name=%D9%84%D9%88%D8%A7%D8%B2%D9%85+%D9%85%D8%B1%D8%A7%D9%82%D8%A8%D8%AA+%D9%88+%D8%A2%D8%B1%D8%A7%DB%8C%D8%B4%09&promo_position=all_mega_menu_top&promo_creative=193659&bCode=193659"
        target="_blank"
      >
        <img
          className="h-full w-full object-cover"
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/77caecffa403c599bf9415c3ba7a06a7db57485a_1738482408.jpg?x-oss-process=image/quality,q_95/format,webp"
          alt="advertisement"
        />
      </a>
    </div>
  );
}

export default memo(TopAdvertisement);
