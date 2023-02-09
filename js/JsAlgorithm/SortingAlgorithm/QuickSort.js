/**
 * 
 * @param {*} array 
 * @returns sorted array
 * @description Quicksort is a sorting algorithm based on the divide and conquer approach where
                1. An array is divided into subarrays by selecting a pivot element (element selected from the array).
                   While dividing the array, the pivot element should be positioned in such a way that 
                   elements less than pivot are kept on the left side and elements greater than 
                   pivot are on the right side of the pivot.
                2.The left and right subarrays are also divided using the same approach. 
                  This process continues until each subarray contains a single element.
                3.At this point, elements are already sorted. Finally, elements are combined to form a sorted array.
 */
export default function quickSort(array) {
  if (array.length < 2) return array;

  let pivot = array[array.length - 1];
  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    array[i] < pivot ? leftArray.push(array[i]) : rightArray.push(array[i]);
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}
