var inputtoDB = function(thequery){
  var fs = require('fs');
  var SQL = require('sql.js');
  var file = fs.readFileSync('./test.db');

  // Load the db
  var db = new SQL.Database(file);
 db.run(thequery);
var data = db.export();
var thebuffer = new Buffer(data);
fs.writeFileSync("test.db", thebuffer);
console.log('done?');
};

var retreiveFromDB = function (thequery) {
  var fs = require('fs');
  var SQL = require('sql.js');
  var file = fs.readFileSync('./test.db');

  // Load the db
  var db = new SQL.Database(file);
return  db.exec(thequery);
};

var printTable = function(data){

//var data=[{columns:['a','b','c'], values:[[0,'hello','elliot'],[1,'world','white']]}];
var tablestring='<table id="tableid" border="2"><tr>';
for (var inside in data[0]) {
      for (var i = 0; i < data[0][inside].length; i++) {
        if ( data[0][inside][i].constructor === Array )
        {

            for (var x = 0; x < data[0][inside][i].length; x++)
            {
              if(x === 0) { tablestring+='<tr>'; }
              tablestring+= '<td>' + data[0][inside][i][x] + '</td>';
        //      if(x === (data[0][inside].length)) { tablestring+='</tr>'; }
                                                                }
            }
          else {
          tablestring+= '<th>' + data[0][inside][i] + '</th>';

               }

    }

  }

  tablestring+='</table>';

  console.log(tablestring);
  return tablestring;
};
//-------------------vv MODULES vv ----------------
module.exports.printTable = printTable;
module.exports.inputtoDB = inputtoDB;
module.exports.retreiveFromDB = retreiveFromDB;
//--------------------^^ MODULES ^^ ----------------
