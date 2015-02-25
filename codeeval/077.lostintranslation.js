var fs = require('fs');

var M = {
  'a': 'y',
  'b': 'h',
  'c': 'e',
  'd': 's',
  'e': 'o',
  'f': 'c',
  'g': 'v',
  'h': 'x',
  'i': 'd',
  'j': 'u',
  'k': 'i',
  'l': 'g',
  'm': 'l',
  'n': 'b',
  'o': 'k',
  'p': 'r',
  'q': 'z',
  'r': 't',
  's': 'n',
  't': 'w',
  'u': 'j',
  'v': 'p',
  'w': 'f',
  'x': 'm',
  'y': 'a',
  'z': 'q',
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    console.log(line.split('').map(function(c) {
      return M[c] || c;
    }).join(''));
  }
});
