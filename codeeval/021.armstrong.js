var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var exponent = line.length;
    var armstrong = String(line.split('').reduce(function(sum, e) {
      return sum + Math.pow(parseInt(e), exponent);
    }, 0));
    console.log(line == armstrong ? 'True' : 'False');
  }
});