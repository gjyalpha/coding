var fs = require('fs');

var MAP = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  'a': '0',
  'b': '1',
  'c': '2',
  'd': '3',
  'e': '4',
  'f': '5',
  'g': '6',
  'h': '7',
  'i': '8',
  'j': '9'
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var result = line.split('').reduce(function(result, current) {
      var r = MAP[current];
      if (r) {
        result.push(r);
      }
      return result;
    }, []);
    console.log(result.length ? result.join('') : 'NONE');
  }
});
