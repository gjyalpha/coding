var fs = require('fs');

function Point(x, y) {
  this.x = x;
  this.y = y;
}

function parse(cooridnates) {
  var point = cooridnates.slice(1, -1).split(',').map(function(e) {
    return parseInt(e, 10);
  });
  return new Point(point[0], point[1]);
}

function distance(p1, p2) {
  return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var points = line.split(', ').map(parse);
    var a = points[0];
    var b = points[1];
    var c = points[2];
    var d = points[3];
    var ab = distance(a, b);
    var ac = distance(a, c);
    var ad = distance(a, d);
    var bc = distance(b, c);
    var bd = distance(b, d);
    var cd = distance(c, d);

    var side; // side length
    var diagonal1; // diagonal length
    if (ab == 0 || ac == 0 || ad == 0 || bc == 0 || bd == 0 || cd == 0) {
      console.log('false');
    } else if (ab == ac && ad == bc && ab == bd && bd == cd && ac == cd) {
      console.log('true');
    } else if (ab == ad && ac == bd && ab == bc && bc == cd && ad == cd) {
      console.log('true');
    } else if (ac == ad && ab == cd && ac == bc && bc == bd && ad == bd) {
      console.log('true');
    } else {
      console.log('false');
    }
  }
});
