import { LeftFlash } from "../../Ui/SVGs/Svg";

function SeeAllBox({amazingOffers}) {
  return (
    <a
    href={"https://www.digikala.com/" + amazingOffers.see_more_url.uri}
      target="_blank"
      className="h-full mr-1 flex flex-col gap-2 items-center justify-center w-40 bg-white p-2 text-[var(--text-color)]"
    >
        <div className="text-[var(--color-blue1)] rounded-full border-2 p-4">
        <LeftFlash width={20} height={20} />
        </div>
        <h4>مشاهده‌ی همه</h4>
    </a>
  );
}

export default SeeAllBox;
