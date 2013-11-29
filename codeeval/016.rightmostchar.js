var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(',');
    console.log(parts[0].lastIndexOf(parts[1]));
  }
});