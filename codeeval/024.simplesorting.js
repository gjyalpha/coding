var fs = require('fs');

function pad0(a, length) {
  if (a.length >= length) {
    return a;
  }
  var padding = new Array(length - a.length + 1).join('0');
  return padding + a;
}

function comparePart(a, b, integer) {
  var length = Math.max(a.length, b.length);
  if (integer) {
    a = pad0(a, length);
    b = pad0(b, length);
  }
  if (a < b) {
    return -1;
  } else if (a == b) {
    return 0;
  } else {
    return 1;
  }
}

function comparePositive(a, b) {
  var partsA = a.split('.');
  var partsB = b.split('.');
  var integerCompare = comparePart(partsA[0], partsB[0], true /* integer part */);
  if (integerCompare !== 0 || (partsA.length == 1 && partsB.length == 1)) {
    return integerCompare;
  } else if (partsA.length === 1 && partsB.length === 2) {
    return -1; // xxx < xxx.y
  } else if (partsA.length == 2 && partsB.length == 1) {
    return 1; // xxx.y > xxx
  } else {
    // Compare fraction
    return comparePart(partsA[1], partsB[1], false /* not integer part*/);
  }
}

function compare(a, b) {
  var posA = a.charAt(0) != '-';
  var posB = b.charAt(0) != '-';
  if (posA && !posB) {
    return 1;
  } else if (!posA && posB) {
    return -1;
  }
  // Same sign
  if (posA) {
    // Postive
    return comparePositive(a, b);
  } else {
    // Negative
    return -comparePositive(a.substring(1), b.substring(1));
  }
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var numbers = line.split(' ');
    numbers.sort(compare);
    console.log(numbers.join(' '));
  }
});