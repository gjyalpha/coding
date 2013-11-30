/**
 * The slowest method to check if a nubmer is prime.
 */
function isPrime(n) {
  if (n === 2 || n === 3) {
    return true;
  }
  for (var i = 3, l = Math.sqrt(n); i <= l; i = i + 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function compare(a, b) {
  return a == b ?
      0 :
      a > b ? 1 : -1;
}