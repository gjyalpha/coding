var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    if (line.length <= 55) {
      console.log(line);
    } else {
      var result = line.slice(0, 40);
      var lastIndexOfSpace = result.lastIndexOf(' ');
      if (lastIndexOfSpace != -1) {
        result = result.slice(0, lastIndexOfSpace);
      }
      console.log(result + '... <Read More>');
    }
  }
});
