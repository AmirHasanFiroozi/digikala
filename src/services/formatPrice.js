export default function formatPrice(number) {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  let formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedNumber.replace(/\d/g, (digit) => persianDigits[digit]);
}
