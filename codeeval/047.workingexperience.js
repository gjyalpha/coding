var fs = require('fs');

var MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

function toAbsoluteMonth(date) {
  var parts = date.split(' ');
  var month = MONTHS.indexOf(parts[0]);
  var year = parseInt(parts[1], 10);
  return (year - 1990) * 12 + month;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
     var datePairs = line.split('; ').map(function(pair) {
       return pair.split('-').map(toAbsoluteMonth);
     });
     var months = {};
     datePairs.forEach(function(pair) {
       for (var month = pair[0]; month <= pair[1]; month++) {
         months[month] = 1;
       }
     });
     console.log(Math.floor(Object.keys(months).length / 12));
  }
});
