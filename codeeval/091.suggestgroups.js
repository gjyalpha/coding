var fs = require('fs');

var users = [];
var membership = {};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var parts = line.split(':');
    var user = parts[0];
    var friends = parts[1].split(',');
    var groups = parts[2].split(',');
    for (var i = 0, g; g = groups[i]; i++) {
      if (!(g in membership)) {
        membership[g] = {};
      }
      membership[g][user] = true;
    }
    users.push([user, friends]);
  }
});

//console.log('D: ', users);
//console.log('D: ', membership);

var result = [];
for (var i = 0, user; user = users[i]; i++) {
  var threshold = user[1].length / 2;
  var suggestedGroups = [];
  for (var group in membership) {
    var friendsInGroupCount = 0;
    var members = membership[group];
    for (var j = 0, friend; friend = user[1][j]; j++) {
      if (friend in members) {
        friendsInGroupCount++;
      }
    }
    if (friendsInGroupCount >= threshold && !(user[0] in members)) {
      suggestedGroups.push(group);
    }
  }
  if (suggestedGroups.length) {
    suggestedGroups.sort();
    result.push(user[0] + ':' + suggestedGroups.join(','));
  }
}

result.sort();
console.log(result.join('\n'));
