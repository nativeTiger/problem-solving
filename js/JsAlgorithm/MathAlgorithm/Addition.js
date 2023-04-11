/**
 * @description Adding corresponding number of the two array
 */
export default function addition() {
  const arrayOne = [9, 8, 9];
  const arrayTwo = [9, 8, 9];
  const result = [];
  let carry = 0;
  for (let i = arrayOne.length - 1; i >= 0; i--) {
    let sum = arrayOne[i] + arrayTwo[i] + carry;
    if (sum >= 10) {
      if (i !== 0) {
        result[i] = sum % 10;
        carry = Math.trunc(sum / 10);
      } else {
        result[i] = sum;
      }
    } else {
      result[i] = sum;
      carry = 0;
    }
  }
  console.log(result);
}
