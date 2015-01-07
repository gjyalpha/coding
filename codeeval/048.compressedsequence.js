var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var numbers = line.split(' ');
    var current = numbers[0];
    var count = 1;
    var result = [];
    for (var i = 1, num; num = numbers[i]; i++) {
      if (num === current) {
        count++;
      } else {
        result.push(count);
        result.push(current);
        current = num;
        count = 1;
      }
    }
    result.push(count);
    result.push(current);

    console.log(result.join(' '));
  }
});
