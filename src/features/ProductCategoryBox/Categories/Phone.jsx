import { memo, useMemo } from "react";
import CategoryItems from "./CategoryItems";



function Phone({ device }) {
  const phoneItems = useMemo(
    () => ({
      title: "همه‌ی محصولات موبایل",
      maxDesktopColumn: 4,
      items: [
        {
          itemTile: "برند های مختلف گوشی موبایل",
          colNumber: 1,
          elements: [
            { name: "گوشی آیفون" },
            { name: "گوشی سامسونگ" },
            { name: "گوشی شیائومی" },
            { name: "گوشی نوکیا" },
            { name: "گوشی آنر" },
            { name: "گوشی ناتینگ فون" },
            { name: "گوشی ریلمی" },
            { name: "گوشی موتورولا" },
            { name: "گوشی تی سی ال" },
            { name: "گوشی هوآوی" },
            { name: "گوشی داریا" },
            { name: "گوشی گوگل پیکسل" },
            { name: "گوشی اوپو" },
            { name: "گوشی آلکاتل" },
            { name: "گوشی جی ال ایکس" },
            { name: "گوشی موبایل دو جی" },
            { name: "گوشی بلک ویو" },
            { name: "قیمت گوشی" },
          ],
        },
        {
          itemTile: "برند های برتر",
          colNumber: 1,
          elements: [
            { name: "سامسونگ" },
            { name: "اپل" },
            { name: "هوآوی" },
            { name: "آنر" },
            { name: "ریلمی" },
          ],
        },
        {
          itemTile: "گوشی بر اساس قیمت",
          colNumber: 2,
          elements: [
            { name: "گوشی ارزان" },
            { name: "گوشی موبایل قسطی" },
            { name: "گوشی تا دو ملیون تومن" },
            { name: "گوشی تا پنج ملیون تومن" },
            { name: "گوشی تا هفت ملیون تومن" },
            { name: "گوشی تا پونزده ملیون تومن" },
            { name: "گوشی بالای پونزده ملیون تومن" },
          ],
        },
        {
          itemTile: "گوشی بر اساس عملکرد",
          colorNumber: 2,
          elements: [
            { name: "گوشی گیمینگ" },
            { name: "گوشی 5G" },
            { name: "‌گوشی دکمه‌ای" },
            { name: "گوشی زد آب" },
            { name: "گوشی مناسب عکاسی" },
            { name: "گوشی میان رده" },
            { name: "گوشی اقتصادی و ارزان" },
            { name: "گوشی دانش‌آموزی" },
            { name: "گوشی پرچم دار" },
            { name: "گوشی دو سیمکارت" },
          ],
        },
        {
          itemTile: "گوشی بر اساس حافظه‌ی داخلی",
          colNumber: 2,
          elements: [
            { name: "گوشی 64 گیگابایت" },
            { name: "گوشی 128 گیگابایت" },
            { name: "گوشی 256 گیگابایت" },
            { name: "گوشی 512 گیگابایت" },
            { name: "گوشی 1 ترابایت" },
          ],
        },
        {
          itemTile: "رزولوشن عکس",
          colNumber: 2,
          elements: [
            { name: "گوشی با دوربین 48 مگاپیکسل" },
            { name: "گوشی با دوربین 50 مگاپیکسل" },
            { name: "گوشی با دوربین 64 مگا پیکسل" },
            { name: "گوشی با دوربین 108 مگاپیکسل" },
          ],
        },
        {
          itemTile: "لوازم جانبی موبایل",
          colNumber: 3,
          elements: [
            { name: "شارژر گوشی" },
            { name: "شارژر وایرلس" },
            { name: "گلس گوشی" },
            { name: "قاب و کاور گوشی" },
            { name: "هولدر گوشی موبایل" },
            { name: "کابل شارژر و مبدل" },
            { name: "پاور بانک (شارژر همراه)" },
          ],
        },
        {
          itemTile: "تبلت",
          colNumber: 3,
          elements: [
            { name: "تبلت سامسونگ" },
            { name: "تبلت اپل (آیپد)" },
            { name: "تبلت شیائومی" },
            { name: "تبلت لنوو" },
            { name: "تبل مایکروسافت" },
            { name: "تبلت دانش آموزی" },
          ],
        },
        {
          itemTile: "هدفون",
          colNumber: 3,
          elements: [
            { name: "هدفون بی سیم" },
            { name: "هدفون اپل (ایر پاد)" },
            { name: "هدفون بیتس" },
            { name: "هدفون سونی" },
            { name: "هدفون سامسونگ (ایرپادز)" },
            { name: "هدفون شیائومی" },
            { name: "هدفون جی دی ال" },
          ],
        },
        {
          itemTile: "ساعت و مچ بند هوشمند",
          colNumber: 3,
          elements: [
            { name: "ساعت هوشمند سامسونگ" },
            { name: "ساعت هوشمند شیائومی" },
            { name: "اپل واچ" },
          ],
        },
        {
          itemTile: "داغ ترین ها",
          colNumber: 4,
          elements: [
            { name: "گوشی S25 سامسونگ" },
            { name: "آیفون 16" },
            { name: "آیفون 16 پرومکس" },
            { name: "شادژر فندکی" },
            { name: "هولدر گردنی" },
            { name: "آیفون 13" },
            { name: "آیفون 12" },
            { name: "آیفون 11" },
            { name: "گوشی سامسونگ سری a" },
            { name: "گوشی سامسونگ سری s" },
            { name: "گوشی سامسونگ سری m" },
            { name: "کاور ایرپاد" },
            { name: "داریا باند 5G" },
            { name: "پوکو M5s" },
            { name: "گلکسی S23 ultra" },
            { name: "ردمی نوت 12" },
            { name: "گلسی S23 SE" },
            { name: "گلسی S23 SE" },
            { name: "گلکسی A14" },
            { name: "گلکسی A24" },
            { name: "گلکسی A34" },
            { name: "گلکسی A54" },
            { name: "قاب گوسی سامسونگ" },
            { name: "قاب گوشی آیفون" },
            { name: "قاب گوشی ریلمی" },
            { name: "قاب گوشی وکال" },
          ],
        },
      ],
    }),
    [],
  );
  return (
    <>
        <CategoryItems device={device} Items={phoneItems} />
      {/* <div className={`flex gap-2 ${device === "mobile" ? "flex-col" : ""}`}>
        <div className={`flex flex-col py-2`}>
          <CategoryHeader device={device}>
            برند های مختلف گوشی موبایل
          </CategoryHeader>
          <ul
            className={`py-1 text-[12px] ${device === "mobile" ? "grid grid-cols-4 gap-5 border-b-[1px] border-(--color-gray3) pb-5 text-center max-sm:grid-cols-2" : ""}`}
          >
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی آیفون
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی سامسونگ
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی شیائومی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی نوکیا
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی آنر
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی ناتینگ فون
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی ریلمی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی موتورولا
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی تی سی ال
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی هوآوی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی داریا
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی گوگل پیکسل
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی اوپو
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی آلکاتل
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی جی ال ایکس
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی اوکال
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی وان پلاس
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی های جنرال لوکس
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی موبایل دو جی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی بلک ویو
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              قیمت گوشی
            </li>
          </ul>
          <CategoryHeader device={device}>برند های برتر</CategoryHeader>
          <ul
            className={`py-1 text-[12px] ${device === "mobile" ? "grid grid-cols-4 gap-5 border-b-[1px] border-(--color-gray3) pb-5 text-center max-sm:grid-cols-2" : ""}`}
          >
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              سامسونگ
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              اپل
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              هوآوی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              آنر
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              ریلمی
            </li>
          </ul>
        </div>
        <div className={`flex flex-col py-2`}>
          <CategoryHeader device={device}>گوشی بر اساس قیمت</CategoryHeader>
          <ul
            className={`py-1 text-[12px] ${device === "mobile" ? "grid grid-cols-4 gap-5 border-b-[1px] border-(--color-gray3) pb-5 text-center max-sm:grid-cols-2" : ""}`}
          >
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی ارزان
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی موبایل قسطی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی تا دو ملیون تومن
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی تا پنج ملیون تومن
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی تا هفت ملیون تومن
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی تا پونزده ملیون تومن
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی بالای پونزده ملیون تومن
            </li>
          </ul>
          <CategoryHeader device={device}>گوشی بر اساس عملکرد</CategoryHeader>
          <ul
            className={`py-1 text-[12px] ${device === "mobile" ? "grid grid-cols-4 gap-5 border-b-[1px] border-(--color-gray3) pb-5 text-center max-sm:grid-cols-2" : ""}`}
          >
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی گیمینگ
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی 5G
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              ‌گوشی دکمه‌ای
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی زد آب
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی مناسب عکاسی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی میان رده
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی اقتصادی و ارزان
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی دانش‌آموزی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی پرچم دار
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی دو سیمکارت
            </li>
          </ul>
          <CategoryHeader device={device}>
            گوشی بر اساس حافظه‌ی داخلی
          </CategoryHeader>
          <ul
            className={`py-1 text-[12px] ${device === "mobile" ? "grid grid-cols-4 gap-5 border-b-[1px] border-(--color-gray3) pb-5 text-center max-sm:grid-cols-2" : ""}`}
          >
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی 64 گیگابایت
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی 128 گیگابایت
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی 256 گیگابایت
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی 512 گیگابایت
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی 1 ترابایت
            </li>
          </ul>
          <CategoryHeader device={device}>رزولوشن عکس</CategoryHeader>
          <ul
            className={`py-1 text-[12px] ${device === "mobile" ? "grid grid-cols-4 gap-5 border-b-[1px] border-(--color-gray3) pb-5 text-center max-sm:grid-cols-2" : ""}`}
          >
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی با دوربین 48 مگاپیکسل
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی با دوربین 50 مگاپیکسل
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی با دوربین 64 مگا پیکسل
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی با دوربین 108 مگاپیکسل
            </li>
          </ul>
        </div>
        <div className={`flex flex-col py-2`}>
          <CategoryHeader device={device}>لوازم جانبی موبایل</CategoryHeader>
          <ul
            className={`py-1 text-[12px] ${device === "mobile" ? "grid grid-cols-4 gap-5 border-b-[1px] border-(--color-gray3) pb-5 text-center max-sm:grid-cols-2" : ""}`}
          >
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              شارژر گوشی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              شارژر وایرلس
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              قاب و کاور گوشی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گلس گوشی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              هولدر گوشی موبایل
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              کابل شارژر و مبدل
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              پاور بانک (شارژر همراه)
            </li>
          </ul>
          <CategoryHeader device={device}>تبلت</CategoryHeader>
          <ul
            className={`py-1 text-[12px] ${device === "mobile" ? "grid grid-cols-4 gap-5 border-b-[1px] border-(--color-gray3) pb-5 text-center max-sm:grid-cols-2" : ""}`}
          >
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              تبلت سامسونگ
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              تبلت اپل (آیپد)
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              تبلت شیائومی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              تبلت لنوو
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              تبل مایکروسافت
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              تبلت دانش آموزی
            </li>
          </ul>
          <CategoryHeader device={device}>هدفون</CategoryHeader>
          <ul
            className={`py-1 text-[12px] ${device === "mobile" ? "grid grid-cols-4 gap-5 border-b-[1px] border-(--color-gray3) pb-5 text-center max-sm:grid-cols-2" : ""}`}
          >
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              هدفون بی سیم
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              هدفون اپل (ایر پاد)
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              هدفون بیتس
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              هدفون سونی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              هدفون سامسونگ (ایرپادز)
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              هدفون شیائومی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              هدفون جی دی ال
            </li>
          </ul>
          <CategoryHeader device={device}>ساعت و مچ بند هوشمند</CategoryHeader>
          <ul
            className={`py-1 text-[12px] ${device === "mobile" ? "grid grid-cols-4 gap-5 border-b-[1px] border-(--color-gray3) pb-5 text-center max-sm:grid-cols-2" : ""}`}
          >
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              ساعت هوشمند سامسونگ
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              ساعت هوشمند شیائومی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              اپل واچ
            </li>
          </ul>
        </div>
        <div className={`flex flex-col py-2`}>
          <CategoryHeader device={device}>داغ ترین ها</CategoryHeader>
          <ul
            className={`py-1 text-[12px] ${device === "mobile" ? "grid grid-cols-4 gap-5 border-b-[1px] border-(--color-gray3) pb-5 text-center max-sm:grid-cols-2" : ""}`}
          >
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی S25 سامسونگ
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              آیفون 16
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              آیفون 16 پرومکس
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              شادژر فندکی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              هولدر گردنی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              آیفون 13
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              آیفون 12
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              آیفون 11
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی سامسونگ سری a
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی سامسونگ سری s
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گوشی سامسونگ سری m
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              کاور ایرپاد
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              داریا باند 5G
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              پوکو M5s
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گلکسی S23 ultra
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              ردمی نوت 12
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گلسی S23 SE
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گلکسی A14
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گلکسی A24
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گلکسی A34
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              گلکسی A54
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              قاب گوسی سامسونگ
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              قاب گوشی آیفون
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              قاب گوشی ریلمی
            </li>
            <li className="py-1.5 text-(--text-color) hover:text-(--color-red)">
              قاب گوشی وکال
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
}

export default memo(Phone);
