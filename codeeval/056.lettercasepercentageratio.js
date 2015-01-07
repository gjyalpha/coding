var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var uppercase = 0;
    for (var i = 0, ii = line.length; i < ii; i++) {
      var c = line.charAt(i);
      if (c == c.toUpperCase()) {
        uppercase++;
      }
    }

    var uppercaseRatio = Math.round(uppercase / line.length * 10000);
    var lowercaseRatio = 10000 - uppercaseRatio;
    uppercaseRatio = uppercaseRatio.toString();
    lowercaseRatio = lowercaseRatio.toString();
    
    var toStr = function(ratio) {
      if (ratio == '0') {
        ratio = '000';
      }
      return ratio.slice(0, -2) + '.' + ratio.slice(-2);
      
    };

    console.log('lowercase: ' + toStr(lowercaseRatio) +
        ' uppercase: ' + toStr(uppercaseRatio));
  }
});
