var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var coordinates = line.split(',').map(function(e) {
      return parseInt(e, 10);
    });
    var ax1 = coordinates[0],
        ay1 = coordinates[1],
        ax2 = coordinates[2],
        ay2 = coordinates[3],
        bx1 = coordinates[4],
        by1 = coordinates[5],
        bx2 = coordinates[6],
        by2 = coordinates[7];
    var intersect = 
        !(ax2 < bx1 || bx2 < ax1 || ay1 < by2 || by1 < ay2);
    
    console.log(intersect ? 'True' : 'False');
  }
});
