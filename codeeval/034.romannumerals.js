var fs = require('fs');

function thousand(n) {
  if (n.length < 4) {
    return '';
  }
  switch (n.charAt(n.length - 4)) {
    case '1': return 'M';
    case '2': return 'MM';
    case '3': return 'MMM';
  }
}

function hundred(n) {
  if (n.length < 3) {
    return '';
  }
  switch (n.charAt(n.length - 3)) {
    case '0': return '';
    case '1': return 'C';
    case '2': return 'CC';
    case '3': return 'CCC';
    case '4': return 'CD';
    case '5': return 'D';
    case '6': return 'DC';
    case '7': return 'DCC';
    case '8': return 'DCCC';
    case '9': return 'CM';
  }
}

function ten(n) {
  if (n.length < 2) {
    return '';
  }
  switch (n.charAt(n.length - 2)) {
    case '0': return '';
    case '1': return 'X';
    case '2': return 'XX';
    case '3': return 'XXX';
    case '4': return 'XL';
    case '5': return 'L';
    case '6': return 'LX';
    case '7': return 'LXX';
    case '8': return 'LXXX';
    case '9': return 'XC';
  }
}

function single(n) {
  if (n.length < 1) {
    return '';
  }
  switch (n.charAt(n.length - 1)) {
    case '0': return '';
    case '1': return 'I';
    case '2': return 'II';
    case '3': return 'III';
    case '4': return 'IV';
    case '5': return 'V';
    case '6': return 'VI';
    case '7': return 'VII';
    case '8': return 'VIII';
    case '9': return 'IX';
  }
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    console.log(thousand(line) + hundred(line) + ten(line) + single(line));  
  }
});