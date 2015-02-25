var fs = require('fs');

function hsl2rgb(H, S, L) {
  console.log(H, S, L);
  var var_1, var_2, R, G, B;
  if ( S == 0 )                       //HSL from 0 to 1
  {
    R = L * 255;                      //RGB results from 0 to 255
    G = L * 255;
    B = L * 255;
  }
  else
  {
    if ( L < 0.5 ) var_2 = L * ( 1 + S );
    else           var_2 = ( L + S ) - ( S * L );
    var_1 = 2 * L - var_2;
    R = 255 * Hue_2_RGB( var_1, var_2, H + ( 1 / 3 ) );
    G = 255 * Hue_2_RGB( var_1, var_2, H );
    B = 255 * Hue_2_RGB( var_1, var_2, H - ( 1 / 3 ) );
  }
  return [R, G, B];
}

function Hue_2_RGB( v1, v2, vH )             //Function Hue_2_RGB
{
   if ( vH < 0 ) vH += 1;
   if ( vH > 1 ) vH -= 1;
   if ( ( 6 * vH ) < 1 ) return ( v1 + ( v2 - v1 ) * 6 * vH );
   if ( ( 2 * vH ) < 1 ) return ( v2 );
   if ( ( 3 * vH ) < 2 ) return ( v1 + ( v2 - v1 ) * ( ( 2 / 3 ) - vH ) * 6 );
   return ( v1 );
} 

function hsv2rgb(h, s, v) {
  var r, g, b, i, f, p, q, t;
  if (h && s === undefined && v === undefined) {
    s = h.s, v = h.v, h = h.h;
  }
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }
  return [
    Math.round(r * 255),
    Math.round(g * 255),
    Math.round(b * 255)
  ];
}

function normalizeDpp(line) {
  var dpp = line.slice(4, -1).split(',').map(function(e) {
    return parseInt(e, 10);
  });
  return [dpp[0] / 359, dpp[1] / 100, dpp[2] / 100];
}

function cmyk2rgb(line) {
  return [];
}

function hex2rgb(line) {
  return [
    parseInt(line.slice(1, 3), 16),
    parseInt(line.slice(3, 5), 16),
    parseInt(line.slice(5, 7), 16)
  ];
}

function rgb2string(rgb) {
  console.log('RGB = ', rgb);
  return 'RGB(' + Math.round(rgb[0]) + ',' +
      Math.round(rgb[1]) + ',' +
      Math.round(rgb[2]) + ')';
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    if (line.indexOf('(') == 0) {
      console.log(rgb2string(cmyk2rgb(line)));
    } else if (line.indexOf('#') == 0) {
      console.log(rgb2string(hex2rgb(line)));
    } else if (line.indexOf('HSL(') == 0) {
      console.log(rgb2string(hsl2rgb.apply(null, normalizeDpp(line))));
    } else if (line.indexOf('HSV(') == 0) {
      console.log(rgb2string(hsv2rgb.apply(null, normalizeDpp(line))));
    }
  }
});
