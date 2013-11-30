var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var words = line.split(' ');
    var maxWord = '';
    for (var i = 0, ii = words.length; i < ii; i++) {
      var word = words[i];
      if (maxWord.length < word.length) {
        maxWord = word;
      }
    }
    console.log(maxWord);
  }
});