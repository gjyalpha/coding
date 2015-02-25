var fs = require('fs');

function reverse(numbers, start, k) {
  var end = start + k - 1;
  if (end >= numbers.length) {
    return;
  }
  while (start < end) {
    var tmp = numbers[start];
    numbers[start] = numbers[end];
    numbers[end] = tmp;
    start++;
    end--;
  }
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(';');
    var numbers = parts[0].split(',');
    var k = parseInt(parts[1], 10);
    for (var i = 0, ii = numbers.length; i < ii; i = i + k) {
      reverse(numbers, i, k);
    }
    console.log(numbers.join(','));
  }
});
