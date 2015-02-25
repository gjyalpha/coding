var fs = require('fs');

function parse(uri) {
  var schemeEnd = uri.indexOf('://');
  if (schemeEnd == -1) {
    console.log(1, uri);
    process.exit(1);
  }
  var scheme = uri.slice(0, schemeEnd).toLowerCase();

  var hostPortStart = schemeEnd + 3;
  var hostPortEnd = uri.indexOf('/', hostPortStart);
  if (hostPortEnd == -1) {
    hostPortEnd = uri.length;
  }
  var hostPort = uri.slice(hostPortStart, hostPortEnd).split(':');
  var host = hostPort[0].toLowerCase();
  var port = hostPort[1] || '80';
  var path = uri.slice(hostPortEnd);

  var newPath = [];
  for (var i = 0, c; c = path.charAt(i); i++) {
    if (c != '%') {
      newPath.push(c);
    } else {
      var hex = path.slice(i + 1, i + 3);
      if (hex.match(/[0-9A-Fa-f]{2}/)) {
        newPath.push(String.fromCharCode(parseInt(hex, 16)));
        i = i + 2;
      } else {
        newPath.push(c);
      }
    }
  } 
  if ((scheme + host + port).indexOf('%') != -1) {
    console.log(3, uri);
    process.exit(1);
  }

  return scheme + '://' + host + ':' + port + newPath.join('');
}

function compare(a, b) {
  //console.log(a);
  //console.log(b);
  return a == b;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(';');
    console.log(compare(parse(parts[0]), parse(parts[1])) ? 'True' : 'False');
  }
});
