var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var origin = line.split(' ');
    var sorted = origin.slice(0).sort(); // only work with '1' - '9'
    for (var i = 0, ii = sorted.length; i < ii; i++) {
      if ((i - 1 < 0 || sorted[i - 1] != sorted[i]) &&
          (i + 1 >= ii || sorted[i] != sorted[i + 1])) {
        // found
        console.log(origin.indexOf(sorted[i]) + 1);
        return;
      }
    }
    console.log(0);
  }
});