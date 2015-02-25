var fs = require('fs');

function to2d(n, index) {
  var column = index % n;
  var row = (index - column) / n;
  return [row, column];
}

function rotate(n, coordinates) {
  return [coordinates[1], n - 1 - coordinates[0]]
}

function toIndex(n, coordinates) {
  return coordinates[0] * n + coordinates[1];
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var matrix = line.split(' ');
    var n = Math.sqrt(matrix.length);

    var result = [];
    matrix.forEach(function(e, index) {
      result[toIndex(n, rotate(n, to2d(n, index)))] = e;
    });

    console.log(result.join(' '));
  }
});
