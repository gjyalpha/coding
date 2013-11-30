var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var words = [], digits = [];
    line.split(',').forEach(function(e) {
      if (e.match(/\d+/)) {
        digits.push(e);
      } else {
        words.push(e);
      }
    });
    console.log([
      words.join(','),
      words.length && digits.length ? '|' : '',
      digits.join(',')
    ].join(''));
  }
});