var fs = require('fs');

function createBlank(length) {
  var spaces = [];
  for (var i = 0; i < length; i++) {
    spaces.push(' ');
  }
  return spaces.join('');
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var words = line.split(' ');
    while (words.length) {
      var buf = [];
      var bufWordLength = 0;

      while (words.length && (bufWordLength + buf.length + words[0].length) <= 80) {
        bufWordLength = bufWordLength + words[0].length;
        buf.push(words.shift());
      }

      var effectiveLength = bufWordLength + buf.length - 1;
      if (!words.length) {
        // last line
        if (buf.length) {
          console.log(buf.join(' '));
        } else {
          console.log('1Error: ' + line);
          process.exit(1);
        }
      } else if (buf.length) {
        if (effectiveLength == 80) {
          console.log(buf.join(' '));
        } else if (effectiveLength < 80) {
          var spaces = 80 - effectiveLength;
          var slots = buf.length - 1;
          var round = slots == 0 ? spaces - 1: Math.floor(spaces / slots);
          var mod = slots == 0 ? 0 : spaces % slots;
          var justified = [buf[0]];
          var roundSpaces = createBlank(round + 1);
          var modSpaces = roundSpaces + ' ';

          if (slots) {
            for (var i = 1, word; word = buf[i]; i++) {
              if (i <= mod) {
                justified.push(modSpaces);
              } else {
                justified.push(roundSpaces);
              }
              justified.push(word);
            }
          } else {
            justified.push(roundSpaces);
          }
          console.log(justified.join(''));
        } else {
          console.log('2Error: ' + line);
          process.exit(1);
        }
      } else {
        console.log('3Error: ' + line);
        process.exit(1);
      }
    }
  }
});
