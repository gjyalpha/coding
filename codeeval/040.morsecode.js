var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var words = line.split('  ').map(function(e) { return e.split(' '); });
    var results = [];
    for (var i = 0, ii = words.length; i < ii; i++) {
      var word = words[i];
      var result = [];
      for (var j = 0, jj = word.length; j < jj; j++) {
        switch (word[j]) {
          case '.-': result.push('A'); break;
          case '-...': result.push('B'); break;
          case '-.-.': result.push('C'); break;
          case '-..': result.push('D'); break;
          case '.': result.push('E'); break;
          case '..-.': result.push('F'); break;
          case '--.': result.push('G'); break;
          case '....': result.push('H'); break;
          case '..': result.push('I'); break;
          case '.---': result.push('J'); break;
          case '-.-': result.push('K'); break;
          case '.-..': result.push('L'); break;
          case '--': result.push('M'); break;
          case '-.': result.push('N'); break;
          case '---': result.push('O'); break;
          case '.--.': result.push('P'); break;
          case '--.-': result.push('Q'); break;
          case '.-.': result.push('R'); break;
          case '...': result.push('S'); break;
          case '-': result.push('T'); break;
          case '..-': result.push('U'); break;
          case '...-': result.push('V'); break;
          case '.--': result.push('W'); break;
          case '-..-': result.push('X'); break;
          case '-.--': result.push('Y'); break;
          case '--..': result.push('Z'); break;
          case '.----': result.push('1'); break;
          case '..---': result.push('2'); break;
          case '...--': result.push('3'); break;
          case '....-': result.push('4'); break;
          case '.....': result.push('5'); break;
          case '-....': result.push('6'); break;
          case '--...': result.push('7'); break;
          case '---..': result.push('8'); break;
          case '----.': result.push('9'); break;
          case '-----': result.push('0'); break;
        }
      }
      results.push(result.join(''));
    }
    console.log(results.join(' '));
  }
});