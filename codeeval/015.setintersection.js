var fs = require('fs');

function intersection(set1, set2) {
  var common = [];
  for (var i = 0, j = 0; i < set1.length && j < set2.length;) {
    if (set1[i] === set2[j]) {
      common.push(set1[i]);
      i++;
      j++;
    } else if (set1[i] < set2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return common.join(',');
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var sets = line.split(';');
    var toInt = function(a) { return parseInt(a); };
    var set1 = sets[0].split(',').map(toInt);
    var set2 = sets[1].split(',').map(toInt);
    console.log(intersection(set1, set2));
  }
});