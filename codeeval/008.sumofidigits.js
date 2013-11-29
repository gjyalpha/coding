var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    console.log(line.split('').reduce(function(sum, i) { return sum + parseInt(i); }, 0));
  }
});