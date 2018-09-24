const { app } = require('electron');

const getMenuTemplate = (mainWindow) => {
  const tmp = [
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteandmatchstyle' },
        { role: 'delete' },
        { role: 'selectall' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'toggledevtools' }
      ]
    },
    {
      role: 'window',
      submenu: [
        { role: 'minimize' },
        {
          label: 'hide',
          click: () => {
            mainWindow.hide();
          },
          accelerator: "Escape"
        },
        { role: 'close' },
      ]
    }
  ];

  if (process.platform === 'darwin') {
    tmp.unshift({
      label: app.getName(),
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services', submenu: [] },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    })

    // Edit menu
    tmp[1].submenu.push(
      { type: 'separator' },
      {
        label: 'Speech',
        submenu: [
          { role: 'startspeaking' },
          { role: 'stopspeaking' }
        ]
      }
    );
  }

  return tmp;
}

module.exports = getMenuTemplate;