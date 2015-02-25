var fs = require('fs');

function parseCoordinate(input) {
  return input.slice(1, -1).split(',').map(function(e) {
    return parseInt(e, 10);
  });
}

function measure(p1, p2) {
  var size = [];
  for (var i = 0, ii = p1.length; i < ii; i++) {
    size.push(Math.abs(p1[i] - p2[i]));
  }
  size.sort(function(a, b) {
    return a - b;
  });
  return size;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    (function(holeInput, bricksInput) {
      var holePoints = holeInput.split(' ');
      var holePoint1 = parseCoordinate(holePoints[0]);
      var holePoint2 = parseCoordinate(holePoints[1]);
      var holeSize = measure(holePoint1, holePoint2);
      //console.log(holeSize);

      var eligibleBricks = [];
      bricksInput.split(';').forEach(function(brickInput) {
        var brick = brickInput.slice(1, -1).split(' ');
        var brickIndex = brick[0];
        var brickPoint1 = parseCoordinate(brick[1]);
        var brickPoint2 = parseCoordinate(brick[2]);
        var brickSize = measure(brickPoint1, brickPoint2);
        //console.log(brickIndex, brickSize);

        if (brickSize[0] <= holeSize[0] && brickSize[1] <= holeSize[1]) {
          eligibleBricks.push(brickIndex);
        }
      });
      eligibleBricks.sort(function(a, b) {
        return a - b;
      });

      console.log(eligibleBricks.join(',') || '-');
    }).apply(null, line.split('|'));
  }
});
