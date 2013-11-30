var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(',');
    var n = parts[0];
    var m = parts[1];
    
    var remainder = n - Math.floor(n / m) * m;
    console.log(remainder);
  }
});