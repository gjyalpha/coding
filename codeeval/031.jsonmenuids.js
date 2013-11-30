var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var data = JSON.parse(line);
    if(!data.menu || !data.menu.items) {
      console.log(0);
    }
    var idSum = 0;
    var items = data.menu.items;
    for (var i = 0, ii = items.length; i < ii; i++) {
      var item = items[i];
      if (item && 'label' in item && 'id' in item) {
        idSum += item.id;
      }
    }
    console.log(idSum);
  }
});