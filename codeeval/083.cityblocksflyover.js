var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var distances = line.split(' ').map(function(e) {
      return e.slice(1, -1).split(',').map(function(e) {
        return parseInt(e, 10);
      });
    });
    var streets = distances[0];
    var avenues = distances[1];
    var sIndex = 0;
    var aIndex = 0;
    var targetStreet = streets[streets.length - 1];
    var targetAvenue = avenues[avenues.length - 1];
    var blocks = 0;

    while (sIndex < streets.length && aIndex < avenues.length) {
      var street = streets[sIndex];
      var avenue = avenues[aIndex];
      var direction = street * targetAvenue - avenue * targetStreet;
      //console.log('D:', direction, sIndex, streets[sIndex], aIndex, avenues[aIndex]);

      if (direction == 0) {
        // cross both street and avenue
        sIndex++;
        aIndex++;
        if (sIndex < streets.length || aIndex < avenues.length) {
          blocks++;
        }
      } else if (direction < 0) {
        blocks++;
        sIndex++; // cross street
      } else {
        blocks++;
        aIndex++; // cross avenue
      }
    }
    if (sIndex == streets.length && aIndex == avenues.length) {
      console.log(blocks);
    } else {
      console.log('ERROR: ' + line);
      process.exit(1);
    }
  }
});
