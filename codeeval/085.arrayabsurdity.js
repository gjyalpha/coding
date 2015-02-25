var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {

    var index = line.indexOf(';');
    var n = parseInt(line.slice(0, index), 10);
    var sum = 0;
    while (1) {
      var nextIndex = line.indexOf(',', index + 1);
      if (nextIndex != -1) {
        sum = sum + parseInt(line.slice(index + 1, nextIndex), 10);
        index = nextIndex;
      } else {
        sum = sum + parseInt(line.slice(index + 1, line.length), 10);
        break;
      }
    }

    var m = n - 2;
    console.log(sum - (m * (m + 1) / 2));
  }
});
