/**
 *
 * @param {*} array rotate the array elements
 */
export default function arrayRotation(array) {
  for (let index = 0; index < 2; index++) {
    const lastItem = array[array.length - 1];
    for (let i = array.length - 1; i >= 0; i--) {
      array[i] = array[i - 1];
    }
    array[0] = lastItem;
  }
  console.log(array);
}
