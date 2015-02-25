var fs = require('fs');

/**
 * @param {number} startBat the start index with a bat there
 * @param {number} endBat the end index with a bat there
 * @param {number} d the distance
 */
function countMaxPossibleBats(startBat, endBat, d) {
  return Math.max(Math.floor((endBat - startBat) / d) - 1, 0);
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var input = line.split(' ').map(function(e) {
      return parseInt(e, 10);
    });
    var l = input.shift();
    var d = input.shift();
    var n = input.shift();

    input.unshift(6 - d);
    input.push(l - 6 + d);

    //console.log(d, input.join());

    var count = 0;
    for (var i = 1, ii = input.length; i < ii; i++) {
      count += countMaxPossibleBats(input[i - 1], input[i], d);
    }

    console.log(count);
  }
});
