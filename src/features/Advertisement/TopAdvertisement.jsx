import { memo } from "react";

function TopAdvertisement() {
  return (
    <div className="relative z-50 h-15 w-full min-w-0 overflow-hidden max-xl:h-[25px]">
      <a href="https://tabdeal.org/magic-box?utm_source=digikala&utm_medium=top_banner&utm_campaign=magicbox&utm_term=6bahman"  target="_blank">
        <img
          className="h-full w-full object-cover"
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1c3632c0b8055876a6c7b46d8ba56aab914cf692_1737821880.jpg?x-oss-process=image/quality,q_95/format,webp"
          alt="advertisement"
        />
      </a>
    </div>
  );
}

export default memo(TopAdvertisement);
