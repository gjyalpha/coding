var fs = require('fs');

function isSelfDescribing(line) {
  var o = {};
  line.split('').forEach(function(n) {
    if (n in o) {
      o[n] = o[n] + 1;
    } else {
      o[n] = 1;
    }
  });
  for (var n in o) {
    if (line[parseInt(n)] != String(o[n])) {
      return'0';
    }
  }
  return '1';
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    console.log(isSelfDescribing(line));
  }
});