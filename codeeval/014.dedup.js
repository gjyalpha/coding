var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(',')
    var newLine = [parts[0]];
    for (var i = 1; i < parts.length; i++) {
      var n = parts[i];
      if (newLine[newLine.length - 1] != n) {
        newLine.push(parts[i]);
      }
    }
    console.log(newLine.join(','));
  }
});