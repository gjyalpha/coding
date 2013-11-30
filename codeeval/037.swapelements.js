var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(' : '),
        data = parts[0].split(' '),
        swaps = parts[1].split(', ').map(function(e) { return e.split('-'); });
    for (var i = 0, ii = swaps.length; i < ii; i++) {
      var temp = data[swaps[i][0]];
      data[swaps[i][0]] = data[swaps[i][1]];
      data[swaps[i][1]] = temp;
    }
    console.log(data.join(' '));
  }
});