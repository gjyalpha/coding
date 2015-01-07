var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var age = parseInt(line, 10);
    if (0 <= age && age <= 2) {
      distribution = 'Still in Mama\'s arms';
    } else if (3 <= age && age <= 4) {
      distribution = 'Preschool Maniac';
    } else if (5 <= age && age <= 11) {
      distribution = 'Elementary school';
    } else if (12 <= age && age <= 14) {
      distribution = 'Middle school';
    } else if (15 <= age && age <= 18) {
      distribution = 'High school';
    } else if (19 <= age && age <= 22) {
      distribution = 'College';
    } else if (23 <= age && age <= 65) {
      distribution = 'Working for the man';
    } else if (66 <= age && age <= 100) {
      distribution = 'The Golden Years';
    } else if (age < 0 || age > 100) {
      distribution = 'This program is for humans';
    }

    console.log(distribution);
  }
});
