var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var period = [line.charAt(0)];
    for (var i = 1, ii = line.length; i < ii; i++) {
      if (period[0] != line[i]) {
        period.push(line[i]);
        continue;
      }
      // Potential match?
      var match = true;
      for (var j = i, jj = line.length; j < jj; j++) {
        if (period[j % period.length] != line[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        break;
      } else {
        period.push(line[i]);
      }
    }
    console.log(period.length);
  }
});