export default function toPersianNumber(number) {
  const MyNumber = String(number).split("");
  const Numbers = "۰۱۲۳۴۵۶۷۸۹";
  const outputNumbers = MyNumber.map((number) => {
    if (number === ".") return ".";
    return Numbers[number];
  });
  return outputNumbers.join("");
}
