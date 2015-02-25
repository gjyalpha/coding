var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(' ');
    var lower = 0;
    var upper = parseInt(parts.shift(), 10);
    for (var i = 0, answer; answer = parts[i]; i++) {
      var guess = Math.round((upper + lower) / 2);
      //console.log(lower, guess, upper, answer);
      switch (answer) {
        case 'Yay!':
          console.log(guess);
          break;
        case 'Higher':
          lower = guess + 1;
          break;
        case 'Lower':
          upper = guess - 1;
          break;
      }
    }
  }
});
