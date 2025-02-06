import { Bag, Cube, Discount, Fire, Percent } from "../SVGs/Svg";

/* eslint-disable react/prop-types */
function NavLinks() {

  return (
    <nav className="text-(--text-color)">
      <ul className="flex items-center gap-4">
        <li
          className="navigation flex items-center gap-1 py-3 hover:text-[var(--color-red)]"
        >
          <Percent />
          شگفت انگیزها
        </li>
        <li
          className="navigation flex items-center gap-1 py-3 hover:text-[var(--color-red)]"
        >
          <Bag />
          سوپر مارکت
        </li>
        <li
          className="navigation flex items-center gap-1 py-3 hover:text-[var(--color-red)]"
        >
          <Cube />
          طلای دیجیتال
        </li>
        <li
          className="navigation flex items-center gap-1 py-3 hover:text-[var(--color-red)]"
        >
          <Fire />
          پرفروش ترین‌ها
        </li>
        <li
          className="navigation flex items-center gap-1 py-3 hover:text-[var(--color-red)]"
        >
          <Discount />
          تخفیف‌ها و پیشنهادها
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
