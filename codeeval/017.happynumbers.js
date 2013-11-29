var fs = require('fs');

function happy(n) {
  return String(n.split('').reduce(function(sum, a) {
    return sum + Math.pow(parseInt(a), 2);
  }, 0));
}

function isHappy(n) {
  var trail = [n];
  for(var next = happy(n);;next = happy(next)) {
    if (next === '1') {
      return '1';
    }
    if (trail.indexOf(next) != -1) {
      // Loop
      return 0;
    }
    trail.push(next);
  }
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    console.log(isHappy(line));
  }
});