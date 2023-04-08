export default function countOfdivisibleSumPair(array) {
  const divisiblePair = [];

  for (let j = 0; j < array.length; j++) {
    const small = array[j];
    for (let i = 0; i < array.length; i++) {
      if (small < array[i]) {
        if ((array[i] + small) % 3 === 0) {
          divisiblePair.push([small, array[i]]);
        }
      }
    }
  }
  console.log(divisiblePair);
  console.log(divisiblePair.length);
}
