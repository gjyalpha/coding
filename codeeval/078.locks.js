var fs = require('fs');

var UNLOCKED = true;
var LOCKED = false;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(' ');
    var n = parseInt(parts[0], 10);
    var m = parseInt(parts[1], 10);
    var doors = [];
    for (var d = 0; d < n; d++) {
      doors.push(UNLOCKED);
    }

    for (var i = 0, ii = m - 1; i < ii; i++) {
      doors = doors.map(function(state, index) {
        if (index % 2 == 1) {
          return LOCKED;
        } else {
          return state;
        }
      });
      doors = doors.map(function(state, index) {
        if (index % 3 == 2) {
          return !state;
        } else {
          return state;
        }
      });
    }
    doors[n - 1] = !doors[n - 1];

    var unlockedCount = doors.reduce(function(count, state) {
      return count + (state ? 1 : 0);
    }, 0);

    console.log(unlockedCount);
  }
});
