/**
 * Insertion Sort
 * ===============
 * Iterate from arr[1] to arr[N] over the array. 
   Compare the current element (key) to its predecessor. 
   If the key element is smaller than its predecessor, compare it to the elements before. 
   Move the greater elements one position up to make space for the swapped element.
 */

const ascendingOrder = (array) => {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > numberToInsert; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = numberToInsert;
  }
  return array;
};

const descendingOrder = (array) => {
  const arrayList = [];
  for (let i = ascendingOrder(array).length - 1; i >= 0; i--) {
    arrayList.push(ascendingOrder(array)[i]);
  }
  return arrayList;
};

export default { ascendingOrder, descendingOrder };
