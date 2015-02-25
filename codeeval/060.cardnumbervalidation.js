var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var sum = line.replace(/ /g, '').split('').map(function(d) {
      return parseInt(d, 10);
    }).reduce(function(sum, d, index, array) {
      if ((array.length - index) % 2 == 0) {
        var value = d * 2;
        if (value > 9) {
          var mod = value % 10;
          value = (value - mod) / 10 + mod;
        }
        return sum + value;
      } else {
        return sum + d;
      }
    }, 0);
    console.log(sum % 10 ? 0 : 1);
  }
});
