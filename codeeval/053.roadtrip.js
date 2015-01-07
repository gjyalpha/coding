var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var cities = line.split('; ').map(function(c) {
      var parts = c.split(',');
      return [parts[0], parseInt(parts[1], 10)];
    });
    cities.sort(function(a, b) {
      return a[1] - b[1];
    });
    var result = [];
    var start = 0;
    cities.forEach(function(c) {
      result.push(c[1] - start);
      start = c[1];
    });
    
    console.log(result.join(','));
  }
});
