var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var total = parseInt(line);
    var count = 0;
    while (total >= 5) {
      total = total - 5;
      count++;
    }
    while (total >= 3) {
      total = total - 3;
      count++;
    }
    while (total >= 1) {
      total = total - 1;
      count++;
    }
    console.log(count);
  }
});
