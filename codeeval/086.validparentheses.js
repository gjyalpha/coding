var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var stack = [];
    for (var i = 0, c; c = line.charAt(i); i++) {
      switch (c) {
        case '(':
        case '[':
        case '{':
          stack.push(c);
          break;
        case ')':
          if (stack.pop() != '(') {
            console.log('False');
            return;
          }
          break;
        case ']':
          if (stack.pop() != '[') {
            console.log('False');
            return;
          }
          break;
        case '}':
          if (stack.pop() != '{') {
            console.log('False');
            return;
          }
          break;
        default:
          console.log('False');
          return;
      }
    }
    console.log(stack.length == 0 ? 'True' : 'False');
  }
});
