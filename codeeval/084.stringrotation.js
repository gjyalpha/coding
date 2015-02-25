var fs = require('fs');

function compare(s1, s2, base) {
  for (var i = 0, ii = s1.length; i < ii; i++) {
    var c1 = s1.charAt(i);
    var c2 = s2.charAt((base + i) % ii);
    if (c1 != c2) {
      return false;
    }
  }
  return true;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(',');
    var s1 = parts[0];
    var s2 = parts[1];
    if (s1.length == s2.length) {
      for (var i = 0, ii = s1.length; i < ii; i++) {
        if (compare(s1, s2, i)) {
          console.log('True');
          return;
        }
      }
    }

    console.log('False');
  }
});
