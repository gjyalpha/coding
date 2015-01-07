var fs = require('fs');

var DIGITS = [
  '-**----*--***--***---*---****--**--****--**---**--',
  '*--*--**-----*----*-*--*-*----*-------*-*--*-*--*-',
  '*--*---*---**---**--****-***--***----*---**---***-',
  '*--*---*--*-------*----*----*-*--*--*---*--*----*-',
  '-**---***-****-***-----*-***---**---*----**---**--',
  '--------------------------------------------------'
];

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var outputLines = ['', '', '', '', '', ''];
    line.match(/\d/g).map(function(c) {
      return parseInt(c, 10);
    }).forEach(function(digit) {
      var start = 5 * digit;
      var end = 5 * (digit + 1);
      DIGITS.forEach(function(digitLine, index) {
        outputLines[index] += digitLine.slice(start, end);
      });
    });

    console.log(outputLines.join('\n'));
  }
});
