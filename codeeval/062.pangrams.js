var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var bits = Array.apply(null, Array(26)); // Initialize array without holes
    line.split('').forEach(function(c) {
      var charCode = c.toLowerCase().charCodeAt(0) - 97;
      if (0 <= charCode && charCode <= 25) {
        bits[charCode] = true;
      }
    });
    var buf = [];
    bits.forEach(function(bit, index) {
      if (!bit) {
        buf.push(String.fromCharCode(97 + index));
      }
    });
    console.log(buf.length ? buf.join('') : 'NULL');
  }
});
