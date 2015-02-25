var fs = require('fs');

function check(stack, line, index) {
  //console.log('D: ', stack, line.slice(index), index);
  for (var i = index, ii = line.length; i < ii; i++) {
    var c = line.charAt(i);
    switch (c) {
      case '(':
        stack.push('(');
        break;
      case ')':
        if (stack.pop() != '(') {
          return false;
        }
        break;
      case ':':
        var next = line.charAt(i + 1);
        if (next == '(' || next == ')') {
          // fork to try smiley
          if (check(stack.slice(0), line, i + 2)) {
            return true;
          } else {
            // Just continue to try the not smiley case
          }
        }
        break;
    }
  }
  return stack.length == 0;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  console.log(check([], line, 0) ? 'YES' : 'NO');
});
