var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var buf = [];
    for (var i = 0, c; c = line.charAt(i); i++) {
      if (buf[buf.length - 1] === c) {
        continue;
      } else {
        buf.push(c);
      }
    }
    console.log(buf.join(''));
  }
});
