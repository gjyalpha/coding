var fs = require('fs');

var tracks = [];
var paths = [];
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
  if (line !== '') {
    tracks.push(line);
  }
});

tracks = tracks.reverse();

function getPosition(track) {
  var checkpoint = track.indexOf('C');
  return checkpoint != -1 ? checkpoint : track.indexOf('_');
}

function setPath(track, position, directionDelta) {
  var path = track.split('');
  var direction;
  if (directionDelta === 0) {
    direction = '|';
  } else if (directionDelta < 0) {
    direction = '\\';
  } else if (directionDelta > 0) {
    direction = '/';
  }
  path[position] = direction;
  return path.join('');
}

var previousPosition = getPosition(tracks[0]);
var previousTrack = tracks[0];

for (var i = 1, track; track = tracks[i]; i++) {
  var position = getPosition(track);
  var directionDelta = position - previousPosition;
  paths.push(setPath(previousTrack, previousPosition, directionDelta));
  previousPosition = position;
  previousTrack = track;
}

paths.push(setPath(previousTrack, previousPosition, 0));

paths.reverse();
paths.forEach(function(p) {
  console.log(p);
});
