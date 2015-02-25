var fs = require('fs');

function isPrime(n) {
  if (n === 2 || n === 3) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (var i = 3, l = Math.sqrt(n); i <= l; i = i + 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var bounds = line.split(',').map(function(e) {
      return parseInt(e, 10);
    });
    var count = 0;
    for (var i = bounds[0], ii = bounds[1]; i <= ii; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
    console.log(count);
  }
});
