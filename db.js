// -------vv IMPORTS vv ----------
var fs = require('fs'); //the fs module of nodejs helps to read write files on the system
var SQL = require('./js/sql.js'); // SQL.js database manager, Compiled with 
                                                               //Allow memory growth as needed flag set.
// -------^^ IMPORTS ^^ ----------

var inputtoDB = function(thequery){

//-- function to input/update to the database file ------ 
  var file = fs.readFileSync('./test.db'); //Reads the file test.db from the harddisk

  var db = new SQL.Database(file); //create a database object from the database file provided
 db.run(thequery); //run the query provided in the function
var data = db.export(); // call the export method to convert the modified db object to a array
var thebuffer = new Buffer(data); // convert the array to a buffer so as to write to be able to write to disk
fs.writeFileSync("./test.db", thebuffer); // write to disk overwrite filename test.db with the new modified db
};

var retreiveFromDB = function (thequery) {
 // function to retreive values from db in [{columns:['a','b','c'], values:[[0,'hello','friend'],[1,'world','white']]}]
 // format. 
  var file = fs.readFileSync('./test.db'); //read the file

  
  var db = new SQL.Database(file);// load the db
return  db.exec(thequery); //return the result after executing the query
};

var printTable = function(data){

 //function to print any result from retreiveFromDB in a HTML tabular format
 // [{columns:['a','b','c'], values:[[0,'hello','friend'],[1,'world','white']]}]
var tablestring='<table id="tableid" class="table1 table table-condensed animated swing"><tr>';
for (var inside in data[0]) { // outermost loop inside becomes 'columns' and 'values'
    
      for (var i = 0; i < data[0][inside].length; i++) {
                                    // inner loop executes for the number of value in key 'inside' 
        if ( data[0][inside][i].constructor === Array ) 
        { // checks if the value is a array (to check if its a header or data of table)

            for (var x = 0; x < data[0][inside][i].length; x++)
            {
            // executes for the number of times the element inside the array
              if(x === 0) { tablestring+='<tr>'; }
              tablestring+= '<td>' + data[0][inside][i][x] + '</td>';
            // prints the value inside the array and concatenate the tablestring
                                                                }
            }
          else {
          tablestring+= '<th>' + data[0][inside][i] + '</th>';
     // if the value wasn't a table data..but a  table header print it on screen 

               }

    }

  }

  tablestring+='</table>';

//  console.log(tablestring);
  return tablestring; //return the table
};

var retreiveSingleFromDB = function(thequery){ // return a single string from a query
  var lolol=retreiveFromDB(thequery); // retreive fom db
return (db.printTable(lolol).split('<td>')[1].split('</td>')[0]); // hac and sclash to get the string within
      // td tag
};

var getSubjects = function(){
    //return a array of subjects from the database
var subjects=[];

  var goti=retreiveFromDB('select * from Subjects;');

//console.log(goti);
      for (var i = 0; i < goti[0].values.length; i++) {

            for (var x = 0; x < goti[0]['values'][i].length; x++)
            {
  subjects.push(goti[0]['values'][i][x]); //push method of array
            }
  }
  return subjects;
};

var printLL = function(data){
    //var data=[{columns:['a','b','c'], values:[[0,'hello','elliot'],[1,'world','white']]}];
var LLstring='<div id="dishid" class = "jumbotron"><ul id="ulid" class="animated pulse">';
for (var inside in data[0]) {
      for (var i = 0; i < data[0][inside].length; i++) {
     
            for (var x = 0; x < data[0][inside][i].length; x++)
            {

              LLstring+= '<li>' + data[0][inside][i][x] + '</li>';
                                                                }
            }
         
    

  

  
  }
    LLstring+='</ul>';
return LLstring;
};
//-------------------vv MODULES vv ----------------
module.exports.printTable = printTable;
module.exports.printLL = printLL;
module.exports.inputtoDB = inputtoDB;
module.exports.retreiveFromDB = retreiveFromDB;
module.exports.retreiveSingleFromDB = retreiveSingleFromDB;
module.exports.getSubjects = getSubjects;
//--------------------^^ MODULES ^^ ----------------
//exports the functions to be used in other files.