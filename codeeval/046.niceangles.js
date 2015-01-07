var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split('.');
    var i = Number(parts[0]);
    var f = Number('0.' + parts[1].substring(0, 4));
    var m = Math.floor(f * 60);
    var s = Math.floor(f * 3600) % 60;
    var toStr = function(i) {
      return i < 10 ? '0' + i : i.toString();
    };
    console.log(i + '.' + toStr(m) + '\'' + toStr(s) + '"');
  }
});
