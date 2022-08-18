/**
 * Binary search is an efficient algorithm for finding an item from a sorted list of items.
 * It works by repeatedly dividing in half the portion of the list that could contain the item,
 * until you've narrowed down the possible locations to just one.
 */

const binarySearch = (targetedNumber, numbersArray) => {
  const sortedNumberArray = numbersArray.sort();
  let low, high, mid;
  low = 0;
  high = sortedNumberArray.length;
  while (low <= high) {
    mid = (low + high) / 2;
    if (targetedNumber === sortedNumberArray[mid]) {
      return targetedNumber;
    } else if (targetedNumber > sortedNumberArray[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

const recursiveBinarySearch = (targetedNumber, numbersArray, low, high) => {
  if (low <= high) {
    let mid = (low + high) / 2;
    if (targetedNumber === numbersArray[mid]) {
      return targetedNumber;
    } else if (targetedNumber > numbersArray[mid]) {
      return recursiveBinarySearch(targetedNumber, numbersArray, mid + 1, high);
    } else {
      return recursiveBinarySearch(targetedNumber, numbersArray, low, mid - 1);
    }
  }
  return -1;
};

export default { binarySearch, recursiveBinarySearch };
