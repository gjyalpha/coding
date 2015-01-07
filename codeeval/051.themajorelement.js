var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var counters = [];
    var elements = line.split(',');
    var threshold = elements.length / 2;
    elements.map(function(e) {
      return parseInt(e, 10);
    }).forEach(function(i) {
      if (counters[i]) {
        counters[i]++;
      } else {
        counters[i] = 1;
      }
      //console.log(i, counters[i], elements.length / 2);
    });

    //console.log(counters);
    var result = 'None';
    for (var i = 0, ii = counters.length; i < ii; i++) {
      if (counters[i] && counters[i] > threshold) {
        result = i;
      }
    }
    console.log(result);
  }
});
