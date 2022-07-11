// function to check for prime
const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

// display the prime and composite number of the given range
const primeArray = [],
  compositeArray = [];

for (let j = 2; j <= 50; j++) {
  isPrime(j) ? primeArray.push(j) : compositeArray.push(j);
}

export default { isPrime, primeArray, compositeArray };
