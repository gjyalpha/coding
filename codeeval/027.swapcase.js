var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var newLine = [];
    for (var i = 0, l = line.length; i < l; i++) {
      var c = line.charAt(i);
      if ('a' <= c && c <= 'z') {
        newLine.push(c.toUpperCase());
      } else if ('A' <= c && c <= 'Z') {
        newLine.push(c.toLowerCase());
      } else {
        newLine.push(c);
      }
    }
    console.log(newLine.join(''));
  }
});