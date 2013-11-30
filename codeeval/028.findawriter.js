var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split('| '),
        dict = parts[0],
        key = parts[1].split(' ');
    var name = [];
    for (var i = 0, ii = key.length; i < ii; i++) {
      name.push(dict.charAt(parseInt(key[i]) - 1));
    }
    console.log(name.join(''));
  }
});