var fs = require('fs');

function assert() {
  if (!arguments[0]) {
    console.log.apply(null, arguments);
    process.exit(1);
  }
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    //console.log(answer_line);
  }
});
