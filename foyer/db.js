// -------vv IMPORTS vv ----------
var fs = require('fs');
var SQL = require('./js/sql.js');
// -------^^ IMPORTS ^^ ----------

var inputtoDB = function(thequery){

  var file = fs.readFileSync('./test.db');

  var db = new SQL.Database(file);
 db.run(thequery);
var data = db.export();
var thebuffer = new Buffer(data);
fs.writeFileSync("test.db", thebuffer);
};

var retreiveFromDB = function (thequery) {
  var file = fs.readFileSync('./test.db');

  // Load the db
  var db = new SQL.Database(file);
return  db.exec(thequery);
};

var printTable = function(data){

//var data=[{columns:['a','b','c'], values:[[0,'hello','elliot'],[1,'world','white']]}];
var tablestring='<table id="tableid" class="table1 table table-condensed animated swing"><tr>';
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

//  console.log(tablestring);
  return tablestring;
};

var retreiveSingleFromDB = function(thequery){
  var lolol=retreiveFromDB(thequery);
return (db.printTable(lolol).split('<td>')[1].split('</td>')[0]);
};

var getSubjects = function(){
var subjects=[];

  var goti=retreiveFromDB('select * from Subjects;');

//console.log(goti);
      for (var i = 0; i < goti[0].values.length; i++) {

            for (var x = 0; x < goti[0]['values'][i].length; x++)
            {
  subjects.push(goti[0]['values'][i][x]);
            }
  }
  return subjects;
};
var printUL = function(data){
  var ulstring='<div id="dishid" class = "jumbotron"><ul id="ulid" class="animated rubberBand">';
  for (var inside in data[0]) {
        for (var i = 0; i < data[0][inside].length; i++) {
          if ( data[0][inside][i].constructor === Array )
          {

              for (var x = 0; x < data[0][inside][i].length; x++)
              {
//                if(x === 0) { tablestring+='<tr>'; }
                ulstring+= '<li>' + data[0][inside][i][x] + ' ';
          //      if(x === (data[0][inside].length)) { tablestring+='</tr>'; }
                                                                  }
              }
            else {

                 }
            ulstring+='</li>';
      }

    }

    ulstring+='</ul>';

  //  console.log(tablestring);
    return ulstring;
};



//-------------------vv MODULES vv ----------------
module.exports.printTable = printTable;
module.exports.printUL = printUL;
module.exports.inputtoDB = inputtoDB;
module.exports.retreiveFromDB = retreiveFromDB;
module.exports.retreiveSingleFromDB = retreiveSingleFromDB;
module.exports.getSubjects = getSubjects;
//--------------------^^ MODULES ^^ ----------------
