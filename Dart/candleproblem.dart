/* **
 * You are in charge of the cake for a child's birthday.
 * You have decided the cake will have one candle for each year of their total age.
 * They will only be able to blow out the tallest of the candles.
 * Count how many candles are tallest.
 */

void main() {
  var candels = [5, 5, 20, 7, 20];
  var max = candels[0];
  var count = 0;

  for (var i = 0; i < candels.length; i++) {
    if (candels[i] > max) {
      max = candels[i];
    }
  }

  for (var j = 0; j < candels.length; j++) {
    if (max == candels[j]) {
      count++;
    }
  }
  print(max);
  print(count);
}
