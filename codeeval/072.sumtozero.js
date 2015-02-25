var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var numbers = line.split(',').map(function(e) {
      return parseInt(e, 10);
    });
    var count = 0;
    for (var i = 0, ii = numbers.length - 3; i < ii; i++) {
      for (var j = i + 1, jj = numbers.length - 2; j < jj; j++) {
        for (var k = j + 1, kk = numbers.length - 1; k < kk; k++) {
          for (var l = k + 1, ll = numbers.length - 0; l < ll; l++) {
            if (numbers[i] + numbers[j] + numbers[k] + numbers[l] == 0) {
              count++;
            }
          }
        }
      }
    }

    console.log(count);
  }
});
