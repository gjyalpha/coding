var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var depth = parseInt(line, 10);
    var result = [1];
    var start = 0;

    for (var d = 1; d < depth; d++) {
      var end = result.length;
      result.push(1);
      for (var i = start + 1; i < end; i++) {
        result.push(result[i] + result[i - 1]);
      }
      result.push(1);
      start = end;
    }

    console.log(result.join(' '));
  }
});
