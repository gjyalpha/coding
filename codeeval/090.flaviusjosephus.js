var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(',');
    var n = parseInt(parts[0], 10);
    var m = parseInt(parts[1], 10);
    var people = [];
    for (var i = 0; i < n; i++) {
      people.push(i);
    }
    var executed = [];
    var base = 0;
    while (people.length) {
      var toKill = (base + m - 1) % people.length;
      //console.log('D: ', people, toKill);
      executed.push(people.splice(toKill, 1)[0]);
      base = toKill;
    }
    console.log(executed.join(' '));
  }
});
