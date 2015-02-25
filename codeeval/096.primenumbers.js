var fs = require('fs');

function generatePrimes(n) {
  var nums = new Array(n);
  var filter = 2;
  while (filter < nums.length) {
    //console.log(filter, nums[filter]);
    if (nums[filter] === undefined) {
      var toBeFiltered = filter + filter;
      while (toBeFiltered < nums.length) {
        nums[toBeFiltered] = true; // true means not prime
        toBeFiltered = toBeFiltered + filter;
      }
    }
    filter++;
  }

  var result = [2];
  for (var i = 3, ii = nums.length; i < ii; i = i + 2) {
    if (nums[i] === undefined) {
      result.push(i);
    }
  }
  return result;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var n = parseInt(line, 10);
    if (n < 2) {
      console.log('n is too small: ' + n);
      process.exit(1);
    } else if (n > 1073741823) {
      console.log('n is too large: ' + n);
      process.exit(1);
    }
    console.log(generatePrimes(n).join(','));
  }
});
