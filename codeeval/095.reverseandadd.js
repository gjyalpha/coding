var fs = require('fs');

function reverse(str) {
  var tmp = str.split('');
  tmp.reverse();
  return tmp.join('');
}

function isPalindrome(str) {
  return str == reverse(str);
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var str = line;
    var count = 0;
   while (1) {
     if (isPalindrome(str)) {
       console.log(count + ' ' + str);
       break;
     }
     var n = parseInt(str, 10);
     var rn = parseInt(reverse(str), 10);
     var result = (n + rn).toString();
     count++;
     str = result;
   }
  }
});
