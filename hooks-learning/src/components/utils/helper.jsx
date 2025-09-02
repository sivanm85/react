function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function nthPrime(n) {
  let count = 0;
  let num = 1;

  while (count < n) {
    num++;
    if (isPrime(num)) {
      count++;
    }
  }

  return num;
}
export { isPrime, nthPrime };
