function toString(n, j) {
  var a = String(n);
  if (j === 1) {
    // First column, do no padding
    return a;
  }
  switch (a.length) {
    case 1:
      return '   ' + a;
    case 2:
      return '  ' + a;
    case 3:
      return ' ' + a;
    case 4:
      return a;
  }
}
for (var i = 1; i <= 12; i++) {
  var line = [];
  for (var j = 1; j <= 12; j++) {
    var n = i * j;
    line.push(toString(n, j));
  }
  console.log(line.join(''));
}