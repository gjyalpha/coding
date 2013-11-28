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

for (var i = 1000; --i >= 0;) {
  var a = String(i);
  var j = 0, l = a.length, mid = Math.floor(a.length / 2);
  var isPalidrome = true;
  while (j <= mid) {
    if (a[j] !== a[l - j - 1]) {
      isPalidrome = false;
      break;
    }
    j++;
  }
  if (isPalidrome && isPrime(i)) {
    console.log(a);
    break;
  }
}