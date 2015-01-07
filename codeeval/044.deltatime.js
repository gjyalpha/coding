var fs = require('fs');

function toSeconds(time) {
  var parts = time.split(':').map(function(s) {
    return parseInt(s, 10);
  });
  return parts[0] * 3600 + parts[1] * 60 + parts[2];
}

function toTime(seconds) {
  var parts = [];
  parts[2] = seconds % 60;
  parts[1] = ((seconds - parts[2]) / 60) % 60;
  parts[0] = ((((seconds - parts[2]) / 60) - parts[1]) / 60 ) % 60;

  return parts.map(function(i) {
    return i < 10 ? '0' + i : i.toString();
  }).join(':');
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var times = line.split(' ');
    var time1 = toSeconds(times[0]);
    var time2 = toSeconds(times[1]);
    console.log(toTime(Math.abs(time1 - time2)));
  }
});
