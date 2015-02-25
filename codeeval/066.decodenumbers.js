var fs = require('fs');

function count(numbers, start, end) {
  if (end - start <= 1) {
    return 1;
  }
  var two = parseInt(
      numbers.slice(start, start + 2),
      10);
  var withOne = count(numbers, start + 1, end);
  var withTwo = (1 <= two && two <= 26) ?
      count(numbers, start + 2, end) :
      0;
  return withOne + withTwo;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    console.log(count(line, 0, line.length));
  }
});
