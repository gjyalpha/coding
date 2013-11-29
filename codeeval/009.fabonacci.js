var fs = require('fs');

var fabonaccis = [0 ,1];

function fabonacci(n) {
  var anchor = n + 1;
  while (anchor > fabonaccis.length) {
    fabonaccis.push(
        fabonaccis[fabonaccis.length - 1] +
        fabonaccis[fabonaccis.length - 2]);
  }
  return fabonaccis[n];
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    console.log(fabonacci(parseInt(line)));
  }
});