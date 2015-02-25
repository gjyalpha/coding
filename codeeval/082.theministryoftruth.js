var fs = require('fs');

function pad(c, n) {
  return new Array(n + 1).join(c);
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(';');
    var originalWords = parts[0].split(/\s+/);
    var targetWords = parts[1].split(/\s+/);
    var result = [];
    var oIndex = 0;
    var tIndex = 0;

    while (oIndex < originalWords.length && tIndex < targetWords.length) {
      var originalWord = originalWords[oIndex];
      var targetWord = targetWords[tIndex];

      var index = originalWord.indexOf(targetWord);
      if (index == -1) {
        result.push(pad('_', originalWord.length));
        oIndex++;
      } else {
        var prefix = pad('_', index);
        var suffix = pad('_', originalWord.length - targetWord.length - index);
        result.push(prefix + targetWord + suffix);
        oIndex++;
        tIndex++;
      }
    }

    if (tIndex != targetWords.length) {
      console.log('I cannot fix history');
    } else {
      while (oIndex < originalWords.length) {
        result.push(pad('_', originalWords[oIndex++].length));
      }
      console.log(result.join(' '));
    }
  }
});
