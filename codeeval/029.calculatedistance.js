var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var m = line.match(/\((.+), (.+)\) \((.+), (.+)\)/),
        x1 = m[1],
        y1 = m[2],
        x2 = m[3],
        y2 = m[4];
    console.log(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)));  
  }
});