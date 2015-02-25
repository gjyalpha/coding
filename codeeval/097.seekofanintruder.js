var fs = require('fs');

var DOT = '\\.';
var B = '\\b';
var HEX = '0x';
var OCT = '0';
var DEC0_255 = '(25[0-5]|2[0-4][0-9]||1[0-9][0-9]|[1-9][0-9]|[0-9])';
var DEC0_254 = '(25[0-4]|2[0-4][0-9]||1[0-9][0-9]|[1-9][0-9]|[0-9])';
var DEC1_255 = '(25[0-5]|2[0-4][0-9]||1[0-9][0-9]|[1-9][0-9]|[1-9])';
var HEX0_FF = '([0-9A-Fa-f]{1,2})';
var HEX0_FE = '([1-9A-Fa-f][0-9A-Ea-e]|[0-9A-Fa-f])';
var HEX1_FF = '([1-9A-Fa-f][0-9A-Fa-f]|[1-9A-Fa-f]])';
var HEX00_FF = '([0-9A-Fa-f]{2})';
var HEX00_FE = '([0-9A-Fa-f][0-9A-Ea-e])';
var HEX01_FF = '([1-9A-Fa-f][0-9A-Fa-f]|0[1-9A-Fa-f]])';
var OCT000_377 = '([0-3][0-7][0-7])';
var OCT000_376 = '(37[0-6]|3[0-6][0-7]|[0-2][0-7][0-7])';
var OCT001_377 = '([1-3][0-7][0-7]|[1-7][0-7]|[1-7])';
var BIN1_11111111 = '(1[01]{0,7})';
var BIN00000000_11111111 = '[01]{8}';

// Dotted decimal	192.0.2.235 with no leading zero.
var IP1 = new RegExp(
    DEC1_255 + DOT + DEC0_255 + DOT + DEC0_255 + DOT + DEC0_254, 'g');
// Dotted hexadecimal 0xc0.0x0.0x02.0xeb Each octet is individually converted to hexadecimal form.
var IP2 = new RegExp(
    HEX + HEX1_FF + DOT +
    HEX + HEX0_FF + DOT +
    HEX + HEX0_FF + DOT +
    HEX + HEX0_FE, 'g');
 
// Dotted octal 0300.0000.0002.0353 Each octet is individually converted into octal.
var IP3 = new RegExp(
    OCT + OCT001_377 + DOT +
    OCT + OCT000_377 + DOT +
    OCT + OCT000_377 + DOT +
    OCT + OCT000_376 , 'g');

// Dotted binary 11000000.00000000.00000010.11101011 Each octet is individually converted into binary.
var IP4 = new RegExp(
    BIN00000000_11111111 + DOT +
    BIN00000000_11111111 + DOT +
    BIN00000000_11111111 + DOT +
    BIN00000000_11111111 , 'g');

// Binary 11000000000000000000001011101011
var IP5 = new RegExp(
    BIN1_11111111 +
    BIN00000000_11111111 +
    BIN00000000_11111111 +
    BIN00000000_11111111 , 'g');

// Octal 030000001353
var IP6 = new RegExp(OCT001_377 + OCT000_377 + OCT000_377 + OCT000_376, 'g');

// Hexadecimal	0xC00002EB	Concatenation of the octets from the dotted hexadecimal.
var IP7 = new RegExp(HEX + HEX01_FF + HEX00_FF + HEX00_FF + HEX00_FE, 'g');

// Decimal	3221226219	The 32-bit number expressed in decimal.
var IP8 = new RegExp('([1-9][0-9]{7,9})', 'g');

function debug(mark, matches) {
  return;
  console.log.apply(null, arguments);
}

var findIps = [
  function(line) {
    var m = line.match(IP1);
    if (m) {
      debug(1, m);
      m.forEach(function(e) {
        var ip = e.split('.').map(function(e) {
          return parseInt(e, 10);
        });
        collectValidIp(e, 
            (ip[0] << 24) + (ip[1] << 16) + (ip[2] << 8) + ip[3]);
      });
    }
    return line.replace(IP1, '');
  },
  function(line) {
    var m = line.match(IP2);
    if (m) {
      debug(2, m);
      m.forEach(function(e) {
        var ip = e.split('.').map(function(e) {
          return parseInt(e.substring(2), 16);
        });
        collectValidIp(e, 
            (ip[0] << 24) + (ip[1] << 16) + (ip[2] << 8) + ip[3]);
      });
    }
    return line.replace(IP2, '');
  },
  function(line) {
    var m = line.match(IP3);
    if (m) {
      debug(3, m);
      m.forEach(function(e) {
        var ip = e.split('.').map(function(e) {
          return parseInt(e.substring(1), 8);
        });
        collectValidIp(e, 
            (ip[0] << 24) + (ip[1] << 16) + (ip[2] << 8) + ip[3]);
      });
    }
    return line.replace(IP3, '');
  },
  function(line) {
    var m = line.match(IP4);
    if (m) {
      debug(4, m);
      m.forEach(function(e) {
        var ip = e.split('.').map(function(e) {
          return parseInt(e, 2);
        });
        collectValidIp(e, 
            (ip[0] << 24) + (ip[1] << 16) + (ip[2] << 8) + ip[3]);
      });
    }
    return line.replace(IP4, '');
  },
  function(line) {
    var m = line.match(IP5);
    if (m) {
      debug(5, m);
      m.forEach(function(e) {
        collectValidIp(e, parseInt(e, 2));
      });
    }
    return line.replace(IP5, '');
  },
  function(line) {
    var m = line.match(IP6);
    if (m) {
      debug(6, m);
      m.forEach(function(e) {
        collectValidIp(e, parseInt(e, 8));
      });
    }
    return line.replace(IP6, '');
  },
  function(line) {
    var m = line.match(IP7);
    if (m) {
      debug(7, m);
      m.forEach(function(e) {
        collectValidIp(e, parseInt(e.substring(2), 16));
      });
    }
    return line.replace(IP7, '');
  },
  function(line) {
    var m = line.match(IP8);
    if (m) {
      debug(8, m);
      m.forEach(function(e) {
        collectValidIp(e, parseInt(e, 10));
      });
    }
    return line.replace(IP8, '');
  }
];

var MASK = parseInt('ff', 16);

var ips = {};

function toIp(i) {
  return [i >> 24 & MASK, i >> 16 & MASK, i >> 8 & MASK, i & MASK]
    .join('.');
}

function collectValidIp(str, i) {
  debug(99, str, i);
  var ip = [i >> 24 & MASK, i >> 16 & MASK, i >> 8 & MASK, i & MASK];
  if (1 <= ip[0] && ip[0] <= 255 &&
      0 <= ip[0] && ip[0] <= 255 &&
      0 <= ip[0] && ip[0] <= 255 &&
      0 <= ip[0] && ip[0] <= 254) {
    var validIp = ip.join('.');
    debug(100, str + ' -> ' + validIp);
    if (validIp in ips) {
      var ipEntry = ips[validIp];
      ipEntry[0] = ipEntry[0] + 1;
    } else {
      ips[validIp] = [1, validIp, ip];
    }
  }
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    debug(0, line);
    findIps.forEach(function(fn) {
      line = fn(line);
    });
  }
});

var ipList = [];
for (var ip in ips) {
  ipList.push(ips[ip]);
}
ipList.sort(function(a, b) {
  var d = b[0] - a[0];
  if (d != 0) { return d; }
  d = a[2][0] - b[2][0];
  if (d != 0) { return d; }
  d = a[2][1] - b[2][1];
  if (d != 0) { return d; }
  d = a[2][2] - b[2][2];
  if (d != 0) { return d; }
  d = a[2][3] - b[2][3];
  return d;
});

var top = ipList[0][0];
var topIps = [];
for (var i = 0, ip; ip = ipList[i]; i++) {
  if (ip[0] == top) {
    topIps.push(ip[1]);
  } else {
    break;
  }
}

console.log(topIps.join(' '));
