var fs = require('fs');
var stat = fs.statSync(process.argv[2]);
console.log(stat.size);