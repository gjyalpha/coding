var fs = require('fs');

function canTransform(
    binary,
    binaryStart,
    letters,
    letterStart,
    level) {
  //console.log(binaryStart, letterStart);
  console.log(level, binaryStart, binary.length, binary.substring(binaryStart), letterStart, letters.length, letters.substring(letterStart));
  if (binaryStart == binary.length &&
      letterStart == letters.length) {
    // All consumed, can transform
    return true;
  }
  if (binaryStart == binary.length || 
      letterStart == letters.length) {
    // One is consume, but the other has remains,
    // can't transform
    return false;
  }
  var c = binary.charAt(binaryStart);
  var letterCursor = letterStart;
  var eat = function(letter, level) {
    console.log(level, 'eating ' + letter);
    if (letters.charAt(letterCursor) === letter) {
      letterCursor++;
      return true;
    } else {
      return false;
    }
  };
  if (c == '0') {
    letterCursor = letterStart;
    if (eat('A', level)) {
      if (canTransform(binary, binaryStart + 1, letters, letterCursor, level + '  ')) {
        return true;
      }
      while (eat('A', level)) {
        console.log(level, 1, 'eating A');
        if (canTransform(binary, binaryStart + 1, letters, letterCursor, level + '  ')) {
          return true;
        }
      }
    }
    return false;
  } else if (c == '1') {
    letterCursor = letterStart;
    if (eat('A', level)) {
      if (canTransform(binary, binaryStart + 1, letters, letterCursor, level + '  ')) {
        return true;
      }
      while (eat('A', level)) {
        console.log(level, 2, 'eating A');
        if (canTransform(binary, binaryStart + 1, letters, letterCursor, level + '  ')) {
          return true;
        }
      }
    }
    letterCursor = letterStart;
    if (eat('B', level)) {
      if (canTransform(binary, binaryStart + 1, letters, letterCursor, level + '  ')) {
        return true;
      }
      while (eat('B', level)) {
        console.log(level, 3, 'eating B');
        if (canTransform(binary, binaryStart + 1, letters, letterCursor, level + '  ')) {
          return true;
        }
      }
    }
    return false;
  }
}
    
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(' ');
    var binary = parts[0];
    var letters = parts[1];
    console.log(canTransform(binary, 0, letters, 0, '') ? 'Yes' : 'No');
  }
});
