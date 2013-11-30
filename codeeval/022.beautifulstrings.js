var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    // Initialize
    var string = line.toLowerCase(),
        occurrence = [],
        length = 26,
        a = 'a'.charCodeAt(0);
    while(length--) occurrence.push(0);
    
    // Map
    for (var l = string.length; --l >=0;) {
      var charCode = string.charCodeAt(l) - a;
      if (0 <= charCode && charCode <= 25) {
        occurrence[charCode] += 1;
      }
    }
    
    occurrence.sort(function(a, b) {
      return a == b ?
          0 :
          a > b ? 1 : -1;
    });
    occurrence.reverse();
    
    // Reduce
    console.log(occurrence.reduce(function(sum, current, index) {
      return sum + current * (26 - index);
    }, 0));
  }
});