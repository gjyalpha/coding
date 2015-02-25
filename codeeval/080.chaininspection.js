var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var map = {};
    line.split(';').map(function(e) {
      return e.split('-');
    }).forEach(function(pair) {
      var name = pair[0];
      var address = pair[1];
      if (name in map) {
        console.log('BAD', 0);
        process.exit(0);
      }
      map[name] = address;
    });
    var cursor = 'BEGIN';
    while (1) {
      //console.log(cursor);
      if (cursor == 'END') {
        break;
      } else if (!(cursor in map)) {
        console.log('BAD');
        return;
      } else {
        var address = map[cursor];
        delete map[cursor];
        cursor = address;
      }
    }
    if (JSON.stringify(map) != '{}') {
      console.log('BAD');
    } else {
      console.log('GOOD');
    }
  }
});
