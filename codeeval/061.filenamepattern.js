var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var filenames = line.split(' ');
    var pattern = filenames.shift();
    var regexp = new RegExp(
        '^' +
        pattern.replace(/\./g, '\\.')
            .replace(/\?/g, '.')
            .replace(/\*/g, '.*') +
        '$');

    var matches = filenames.filter(function(filename) {
      return !!filename.match(regexp);
    });
    console.log(matches.join(' ') || '-');
  }
});
