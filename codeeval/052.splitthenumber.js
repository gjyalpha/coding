var fs = require('fs');

var MAP = {
  'a': 0,
  'b': 1,
  'c': 2,
  'd': 3,
  'e': 4,
  'f': 5,
  'g': 6,
  'h': 7,
  'i': 8,
  'j': 9,
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(' ');
    var num = parts[0];
    var pattern = parts[1];
    var buf = [];
    var expression = [];
    pattern.split('').forEach(function(c) {
      if (c in MAP) {
        buf.push(num[MAP[c]]);
      } else {
        expression.push(parseInt(buf.join(''), 10));
        buf = [];
        expression.push(c);
      }
    });
    expression.push(parseInt(buf.join(''), 10));
    buf = [];

    console.log(eval(expression.join('')));
  }
});
