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

var sum = 2;
for (var count = 1, primeCandidate = 3; count < 1000; primeCandidate += 2) {
  if (isPrime(primeCandidate)) {
    sum += primeCandidate;
    count++;
  }
}

console.log(sum);