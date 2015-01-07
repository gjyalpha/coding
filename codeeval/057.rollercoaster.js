var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var letterCount = 0;
    console.log(line.split('').map(function(c) {
      if (c.match(/[A-Za-z]/)) {
        letterCount++;
        if (letterCount % 2 == 1) {
          return c.toUpperCase();
        } else {
          return c.toLowerCase();
        }
      } else {
        return c;
      }
    }).join(''));
  }
});
