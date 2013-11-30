var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var lists = line.split(' | ').map(function(s) {
      return s.split(' ').map(function(e) {
        return parseInt(e, 10);
      });
    });
    for (var i = 0, ii = lists[0].length; i < ii; i++) {
      lists[0][i] = lists[0][i] * lists[1][i];
    }
    console.log(lists[0].join(' '));
  }
});