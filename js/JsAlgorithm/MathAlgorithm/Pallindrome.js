export default function isPallindrome(number) {
  const numberString = number.toString();
  const numberArray = [];
  for (let i = numberString.length - 1; i >= 0; i--) {
    numberArray.push(numberString[i]);
  }
  return numberArray.join("") == number;
}
