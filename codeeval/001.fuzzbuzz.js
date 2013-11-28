var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var numbers = line.split(' ');
    var a = parseInt(numbers[0]);
    var b = parseInt(numbers[1]);
    var n = parseInt(numbers[2]);
    var result = [];
    for (var i = 1; i <= n; i++) {
      if (i % a === 0) {
        if (i % b === 0) {
          result.push('FB');
        } else {
          result.push('F');
        }
      } else if (i % b === 0) {
        result.push('B');
      } else {
        result.push(String(i));
      }
    }
    console.log(result.join(' '));
  }
});