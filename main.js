const { app, BrowserWindow, globalShortcut, Menu } = require('electron')
const getMenuTemplate = require("./js/menu.js");

var mainWindow

app.on('ready', () => {

  mainWindow = new BrowserWindow({ width: 600, height: 55, movable: false, frame: false, resizable: false });

  mainWindow.loadFile('index.html');

  const menu = Menu.buildFromTemplate(getMenuTemplate(mainWindow));
  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  globalShortcut.register('Alt+Space', () => {
    mainWindow.show();
  });
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  mainWindow.show();
})

app.on('browser-window-blur', () => {
  mainWindow.hide();
});
