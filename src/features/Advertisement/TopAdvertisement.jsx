import { memo } from "react";

function TopAdvertisement() {
  return (
    <div className="fixed top-0 z-50 h-16 w-full min-w-0 overflow-hidden max-xl:relative max-xl:h-[25px]">
      <a
        href="https://www.digikala.com/landing/USED-LIKENEW/?utm_source=DKHP&utm_medium=TOPBANNER&utm_campaign=LIKENEWCAMP&utm_id=DK-TOPBANNER-LIKENEWCAMPAIGN-WEB&promo_name=%DA%A9%D8%A7%D9%84%D8%A7%DB%8C+%DA%A9%D8%A7%D8%B1%DA%A9%D8%B1%D8%AF%D9%87+%D8%A8%D8%A7+%D9%82%DB%8C%D9%85%D8%AA+%DA%A9%D9%85%D8%AA%D8%B1&promo_position=all_mega_menu_top&promo_creative=193720&bCode=193720"
        target="_blank"
      >
        <img
          className="h-full w-full object-cover"
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/0a0b24190cf0a64faa456c02585c84f586912a91_1738652577.jpg?x-oss-process=image/quality,q_95/format,webp"
          alt="advertisement"
        />
      </a>
    </div>
  );
}

export default memo(TopAdvertisement);
