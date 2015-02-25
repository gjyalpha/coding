var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var matches = line.match(
        /Center: \(([^,]+), ([^,]+)\); Radius: ([^;]+); Point: \(([^,]+), ([^,]+)\)/);
    var cx = matches[1];
    var cy = matches[2];
    var r = matches[3];
    var px = matches[4];
    var py = matches[5];
    if (Math.sqrt(Math.pow(cx - px, 2) + Math.pow(cy - py, 2)) < r) {
      console.log('true');
    } else {
      console.log('false');
    }
  }
});
