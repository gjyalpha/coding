var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var i1 = line.lastIndexOf(' ');
    var i2 = line.lastIndexOf(' ', i1 - 1);
    console.log(line.substring(i2 + 1, i1));
  }
});