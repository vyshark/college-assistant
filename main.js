// --------------------vv IMPORT MODULES vv-----------------------
var electron = require('electron');
// Module to control application life.
var app = electron.app;
// Module to create native browser window.
var BrowserWindow = electron.BrowserWindow;

var Tray = electron.Tray;

var Menu = electron.Menu;
//--------------------^^ IMPORT MODULES ^^ -----------------

// --------------------vv IMPORT files vv ------------------
var db = require('./db');
// -------------------^^ IMPORT files ^^ --------------------
let mainWindow;         // saving from garbage collector
let tray;

function createWindow (width ,height,dir) {
    //const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
    mainWindow = new electron.BrowserWindow({width,height, backgroundColor: '#0e0b16'});

//db.onCloseSave();


    mainWindow.loadURL('file://' + __dirname + dir);
   //mainWindow.openDevTools();
  // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        mainWindow = null;
        });
    }

function createTrayIcon () {
  tray=new Tray( './applogo.png');
    var traypopup = Menu.buildFromTemplate([
    {
      label: 'department',
     submenu : [
        {
          label: 'IT',
          click(){ console.log('here a function can be put to download alternate mydb.db from remote server'); }
        },
        {
          label: 'Socio',
          click(){ console.log(' similarly here a function can be put to download alternate mydb.db from remote server'); }
        }
              ]

    },
    {label:'exit' , click(){ mainWindow=null ; app.quit() }}  //    {label: 'exit', click(){ app.quit()}}
  ]);
  tray.setContextMenu(traypopup);
  /*tray.on('click' , function (){
    BrowserWindow.show();
  });*/
  }



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function(){
      createWindow(400,600,'/login.html');
    
      createTrayIcon();
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {

});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

var navigate = function(data){
    mainWindow.loadURL('file://' + __dirname + '/' + data);
}

module.exports.navigate = navigate;

