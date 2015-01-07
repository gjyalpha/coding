var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var buf = [];
    var parts = line.split(' ');
    for (var i = 0, ii = parts.length; i < ii; i = i + 2) {
      var flag = parts[i];
      var payload = parts[i + 1];
      switch (flag) {
        case '0':
          buf.push(payload);
          break;
        case '00':
          buf.push(payload.replace(/0/g, '1'));
          break;
      }
    }
    console.log(parseInt(buf.join(''), 2));
  }
});
