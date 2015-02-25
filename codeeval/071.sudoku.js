var fs = require('fs');

function checkRow(dim, numbers, row) {
  var bits = Array.apply(null, Array(dim));
  var base = row * dim;
  for (var i = 0; i < dim; i++) {
    bits[numbers[base + i] - 1] = true;
  }
  //console.log(bits);
  return bits.every(function(e) {
    return !!e;
  });
}

function checkColumn(dim, numbers, column) {
  var bits = Array.apply(null, Array(dim));
  for (var i = 0; i < dim; i++) {
    bits[numbers[i * dim + column] - 1] = true;
  }
  //console.log(bits);
  return bits.every(function(e) {
    return !!e;
  });
}

function checkSubGrid(dim, gridDim, numbers, gridX, gridY) {
  var bits = Array.apply(null, Array(dim));

  for (var x = 0; x < gridDim; x++) {
    for (var y = 0; y < gridDim; y++) {
      bits[numbers[gridY * dim * gridDim + y * dim + x] - 1] = true;
    }
  }
  //console.log(bits);
  return bits.every(function(e) {
    return !!e;
  });
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(';');
    var dim = parseInt(parts[0]);
    var gridDim = Math.sqrt(dim);
    var numbers = parts[1].split(',').map(function(e) {
      return parseInt(e, 10);
    });

    for (var i = 0, ii = dim; i < ii; i++) {
      if (!checkRow(dim, numbers, i) && !checkColumn(dim, numbers, i)) {
        console.log('False');
        return;
      }
    }

    for (var x = 0; x < gridDim; x++) {
      for (var y = 0; y < gridDim; y++) {
        if (!checkSubGrid(dim, gridDim, numbers, x, y)) {
          console.log('False');
          return;
        }
      }
    }

    console.log('True');
  }
});
