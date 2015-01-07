var fs = require('fs');

var slangs = [
  ', yeah!',
  ', this is crazy, I tell ya.',
  ', can U believe this?',
  ', eh?',
  ', aw yea.',
  ', yo.',
  '? No way!',
  '. Awesome!'
];
var punctuationCount = 0,
    slangIndex = 0; 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var buf = [];
    for (var i = 0, c; c = line.charAt(i); i++) {
      if (!c) {
        continue;
      }
      switch (c) {
        case '.':
        case '!':
        case '?':
          punctuationCount++;
          if (punctuationCount % 2 === 0) {
            buf.push(slangs[(slangIndex++) % slangs.length]);
          } else {
            buf.push(c);
          }
          break;
        default:
          buf.push(c);
          break;
      }
    }
    console.log(buf.join(''));
  }
});
