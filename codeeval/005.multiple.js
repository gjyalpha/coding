var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var numbers = line.split(',');
    var x = parseInt(numbers[0]);
    var n = parseInt(numbers[1]);
    // Calculate exponent
    var e = 0, tempN = n;
    for (;;) {
      tempN = tempN >> 1;
      e++;
      if (tempN === 1) {
        break;
      }
    }
    for (var i = 0;; i++) {
      var multiple = i << e;
      if (multiple >= x) {
        // Found
        console.log(multiple);
        return;
      }
    }
  }
});