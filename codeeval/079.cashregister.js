var fs = require('fs');

var BILLS = [
  ['ONE HUNDRED', 10000],
  ['FIFTY', 5000],
  ['TWENTY', 2000],
  ['TEN', 1000],
  ['FIVE', 500],
  ['TWO', 200],
  ['ONE', 100],
  ['HALF DOLLAR', 50],
  ['QUARTER', 25],
  ['DIME', 10],
  ['NICKEL', 05],
  ['PENNY', 01]
];

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(';');
    var price = Number(parts[0]) * 100;
    var cash = Number(parts[1]) * 100;
    if (cash < price) {
      console.log('ERROR');
    } else if (cash == price) {
      console.log('ZERO');
    } else {
      cash = cash - price;
      var result = [];
      for (var i = 0, bill; bill = BILLS[i];) {
        //console.log(bill, cash);
        if (bill[1] > cash) {
          i++;
          continue;
        } else if (bill[1] == cash) {
          result.push(bill[0]);
          console.log(result.join(','));
          return;
        } else if (bill[1] < cash) {
          cash = cash - bill[1];
          result.push(bill[0]);
          continue;
        } else {
          console.log('ERROR');
          return;
        }
      }
      //console.log('failed: ', line);
      //process.exit(1);
      console.log('ERROR');
    }
  }
});
