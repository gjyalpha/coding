var fs = require('fs');
var R2A = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var a1 = parseInt(line.charAt(0), 10);
    var r1 = R2A[line.charAt(1)];

    var total = 0;
    for (var i = 1, ii = line.length / 2; i < ii; i++) {
      var a2 = parseInt(line.charAt(i * 2));
      var r2 = R2A[line.charAt(i * 2 + 1)];
      if (r2 > r1) {
        total = total - a1 * r1;
      } else {
        total = total + a1 * r1;
      }
      a1 = a2;
      r1 = r2;
    }
    total = total + a1 * r1;

    console.log(total);
  }
});
