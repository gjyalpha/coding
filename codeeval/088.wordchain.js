var fs = require('fs');

function max(wordSet, start) {
  var length = 0;
  for (var word in wordSet) {
    if (!wordSet[word] && word.indexOf(start) == 0) {
      // not used word
      wordSet[word] = true;
      length = Math.max(length, 1 + max(wordSet, word.slice(-1)));
      wordSet[word] = false;
    }
  }
  //console.log(wordSet, start, length);
  return length;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var wordSet = {};
    line.split(',').forEach(function(e) {
      wordSet[e] = false; // Not used yet
    });

    var maxLength = max(wordSet, '');
    console.log(maxLength <= 1 ? 'None' : maxLength);
  }
});
