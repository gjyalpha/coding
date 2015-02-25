var fs = require('fs');

function predict(n) {
  //console.log('p: ' + n);
  if (n === 0) {
    return 0;
  }
  var exp = Math.floor(Math.log(n) / Math.log(2));
  var base = Math.pow(2, exp);
  var previous = predict(n - base);
  return (previous + 1) % 3;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    console.log(predict(parseInt(line, 10)));
  }
});
