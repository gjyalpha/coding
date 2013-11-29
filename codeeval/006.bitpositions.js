var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(',');
    var n = parseInt(parts[0]);
    var p1 = parseInt(parts[1]);
    var p2 = parseInt(parts[2]);
    var bit1 = (n & (1 << (p1 - 1))) > 0;
    var bit2 = (n & (1 << (p2 - 1))) > 0;
    console.log(bit1 === bit2 ? 'true' : 'false');
  }
});