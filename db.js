module.exports.onCloseSave = function(){
  var fs = require('fs');
  var SQL = require('sql.js');
  var filebuffer = fs.readFileSync('./mydb.db');

  // Load the db
  var db = new SQL.Database(filebuffer);
 db.run("CREATE TABLE team(name, power);");
var data = db.export();
var buffer = new Buffer(data);
fs.writeFileSync("mydb.db", buffer);
console.log('done?');
};
