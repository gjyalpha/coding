var fs = require('fs');

var S1 = 1 << 7;
var S2 = 1 << 6;
var S3 = 1 << 5;
var S4 = 1 << 4;
var S5 = 1 << 3;
var S6 = 1 << 2;
var S7 = 1 << 1;
var S8 = 1;

var SEG_PATTERN = [
  /* 0 */ S1 | S2 | S3 | S4 | S5 | S6,
  /* 1 */ S2 | S3,
  /* 2 */ S1 | S2 | S4 | S5 | S7,
  /* 3 */ S1 | S2 | S3 | S4 | S7,
  /* 4 */ S2 | S3 | S6 | S7,
  /* 5 */ S1 | S3 | S4 | S6 | S7,
  /* 6 */ S1 | S3 | S4 | S5 | S6 | S7,
  /* 7 */ S1 | S2 | S3,
  /* 8 */ S1 | S2 | S3 | S4 | S5 | S6 | S7,
  /* 9 */ S1 | S2 | S3 | S4 | S6 | S7,
];

function canDigitDisplay(lcdDigit, inputDigit) {
  //console.log(lcdDigit, inputDigit, (lcdDigit & inputDigit));
  return (lcdDigit & inputDigit) === inputDigit;
}

function canDigitsDisplay(lcdDigits, inputDigits, lcdDigitIndexStart) {
  var lcdDigitIndex = lcdDigitIndexStart;
  var inputDigitIndex = 0;;
  while (lcdDigitIndex < lcdDigits.length &&
         inputDigitIndex < inputDigits.length) {
    var digitResult = canDigitDisplay(
          lcdDigits[lcdDigitIndex],
          inputDigits[inputDigitIndex][1]);
    //console.log(
        //lcdDigitIndex,
        //inputDigitIndex,
        //lcdDigits[lcdDigitIndex].toString(2),
        //inputDigits[inputDigitIndex][1].toString(2),
        //inputDigits[inputDigitIndex][0],
        //digitResult);
    if (digitResult) {
      lcdDigitIndex++;
      inputDigitIndex++;
    } else {
      return false;
    }
  }
  return inputDigitIndex === inputDigits.length;
}

function canDisplay(lcdDigits, inputDigits) {
  for (var i = 0, ii = lcdDigits.length; i < ii; i++) {
    if (canDigitsDisplay(lcdDigits, inputDigits, i)) {
      return true;
    }
  }
  return false;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(';');
    var lcdDigits = parts[0].split(' ').map(function(e) {
      return parseInt(e, 2);
    });
    var inputDigits = [];
    parts[1].split('').forEach(function(e) {
      if (e == '.') {
        var digitEntry = inputDigits[inputDigits.length - 1];
        digitEntry[0] = digitEntry[0] + '.';
        digitEntry[1] = digitEntry[1] | S8;
      } else {
        inputDigits.push(
          [e, SEG_PATTERN[parseInt(e, 10)]]);
      }
    });
    console.log(canDisplay(lcdDigits, inputDigits) ? 1 : 0);
  }
});
