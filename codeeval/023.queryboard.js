var fs = require('fs');

var MAX = 256;

var proto = [], l = MAX;
while(l--) {
  proto.push(0);
}

var rowSum = [],
    colSum = [],
    matrix = [];
l = MAX;
while(l--) {
  matrix.push(proto.slice(0));
  rowSum.push(0);
  colSum.push(0);
}

function update(i, j, x) {
  var old = matrix[i][j];
  if (x == old) {
    return;
  }
  matrix[i][j] = x;
  rowSum[i] = rowSum[i] - old + x;
  colSum[j] = colSum[j] - old + x;
}

function setRow(i, x) {
  for (var j = 0; j < MAX; j++) {
    update(i, j, x);
  } 
}

function setCol(j, x) {
  for (var i = 0; i < MAX; i++) {
    update(i, j, x);
  } 
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(' ');
    var command = parts[0];
    switch (command) {
      case 'SetRow':
        setRow(parseInt(parts[1], 10), parseInt(parts[2], 10));
        break;
      case 'SetCol':
        setCol(parseInt(parts[1], 10), parseInt(parts[2], 10));
        break;
      case 'QueryRow':
        console.log(rowSum[parseInt(parts[1], 10)]);
        break;
      case 'QueryCol':
        console.log(colSum[parseInt(parts[1], 10)]);
        break;
    }
  }
});