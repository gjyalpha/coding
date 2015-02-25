var fs = require('fs');

function assert() {
  if (!arguments[0]) {
    console.log.apply(null, arguments);
    process.exit(1);
  }
}

var lines = fs.readFileSync(process.argv[2]).toString().split('\n');
var track = lines[0].split(' ').map(Number);

var NUM = 0;
var TOP = 1;
var ACCEL = 2;
var BRAKE = 3;

function car(line) {
  return line.split(' ').map(Number);
}

var cars = (function() {
  var result = [];
  for (var i = 1, line; line = lines[i]; i++) {
    result.push(car(line));
  }
  return result;
})();

//console.log(track);
//console.log(cars);

function mph2mps(mph) {
  return mph / 3600;
}

function lap(car) {
  var vTop = mph2mps(car[TOP]);
  var accel = (vTop - 0) / (car[ACCEL]);
  var brake = (0 - vTop) / (car[BRAKE]);
  //console.log(car[NUM], vTop, accel, brake);

  var lap = 0;
  var vStart = 0;
  for (var i = 0, ii = track.length; i < ii; i = i + 2) {
    var lSection = track[i];
    var turnDegree = track[i + 1];
    var vEnd = (1 - turnDegree / 180) * vTop;
    
    var tAccel = (vTop - vStart) / accel;
    var tBrake = (vEnd - vTop) / brake;

    var lAccel = (vTop * vTop - vStart * vStart) / 2 / accel;
    var lBrake = (vEnd * vEnd - vTop * vTop) / 2 / brake;

    var tTop = (lSection - lAccel - lBrake) / vTop;
    assert(tTop >= 0, 1, 'ERROR: ', track, car);
    //if (tTop < 0) {
      //var vMax = Math.sqrt(
          //(2 * accel * brake + brake * vStart * vStart - accel * vEnd * vEnd) /
          //(brake - accel));
      //tAccel = (vMax - vStart) / accel;
      //tBrake = (vEnd - vMax) / brake;
      //tTop = 0;
    //}

    var tSection = tAccel + tTop + tBrake;
    //console.log(i, lSection, turnDegree, vStart, vEnd, tAccel, tBrake, lAccel, lBrake, tTop, (tSection));
    lap = lap + tSection;
    vStart = vEnd;
  }
  return (lap);
}

var result = cars.map(function(car) {
  return [car[NUM], lap(car)];
});
result.sort(function(a, b) {
  return a[1] - b[1];
});

function round2(seconds) {
  var str = Math.round(seconds * 100).toString();
  var padding = '';
  switch (str.length) {
    case 1:
      padding = '00';
      break;
    case 2:
      padding = '0';
      break;
  }
  str = padding + str;
  return str.slice(0, -2) + '.' + str.slice(-2);
}

result.forEach(function(e) {
  console.log(e[0] + ' ' + round2(e[1]));
});
