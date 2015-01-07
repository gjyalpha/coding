var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(';');
    var words = parts[0].split(' ');
    var hints = parts[1].split(' ').map(function(e) {
      return parseInt(e, 10);
    });

    var result = words.slice(0);
    var hintTotal = 0;
    hints.forEach(function(hint, index) {
      result[hint - 1] = words[index];
      hintTotal += hint;
    });
    var missingHint = words.length * (words.length + 1) / 2 - hintTotal;
    result[missingHint - 1] = words[words.length - 1];

    console.log(result.join(' '));
  }
});
