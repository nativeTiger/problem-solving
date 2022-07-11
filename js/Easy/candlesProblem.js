/**
 * You are in charge of the cake for a child's birthday.
 * You have decided the cake will have one candle for each year of their total age.
 * They will only be able to blow out the tallest of the candles.
 * Count how many candles are tallest.
 *
 */

const noOfTallestCandles = (candles) => {
  let totalNoOfTallestCandles = 0;
  const tallestCandles = Math.max(...candles);
  candles.filter(
    (candle) => candle === tallestCandles && totalNoOfTallestCandles++
  );
  return totalNoOfTallestCandles;
};

export default noOfTallestCandles;
