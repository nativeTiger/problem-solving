/*Given five positive integers,
 * find the minimum and maximum values that can be calculated
 * by summing exactly four of the five integers.
 * Then print the respective minimum and maximum values as
 * a single line of two space-separated long integers.
 * */

void main() {
  var array = [5, 5, 5, 5, 5];
  var min = array[0];
  var max = array[0];
  var sum = 0;
  var min_sum = 0;
  var max_sum = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }

    sum += array[i];
    min_sum = sum - max;
    max_sum = sum - min;
  }
  print(min_sum);
  print(max_sum);
}
