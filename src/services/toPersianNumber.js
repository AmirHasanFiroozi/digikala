export default function toPersianNumber(number) {
  const MyNumber = String(number).split();
  const Numbers = "۰۱۲۳۴۵۶۷۸۹";
  const outputNumbers = MyNumber.map((number) => Numbers[number]);
  return outputNumbers.join("");
}
