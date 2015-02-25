var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var numbers = line.split(' ').map(function(e) {
      return parseInt(e, 10);
    });
    var n = numbers.shift();
    if (n == 1) {
      console.log('Jolly');
      return;
    }

    var bits = new Array(n - 1);
    for (var i = 1; i < n; i++) {
      var diff = Math.abs(numbers[i] - numbers[i - 1]) - 1;
      if (0 <= diff && diff < n - 1) {
        bits[diff] = true;
      }
    }
    
    var count = 0;
    bits.forEach(function(e) {
      count++;
    });

    console.log(count == n - 1 ? 'Jolly' : 'Not jolly');
  }
});
