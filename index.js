const { app, BrowserWindow, Tray, nativeImage } = require('electron');
const path = require('path');
const { getJpgContextMenu, getPngContextMenu } = require('./contexts');
const { selectedFileScript } = require('./scripts');

let tray;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.hide();
  win.loadFile('index.html');
};

let contextMenu = null;

const rightClickHandler = () => {
  applescript.execString(selectedFileScript, async (err, rtn) => {
    if (err) {
    } else {
      let filePath = rtn;
      const extension = path.extname(filePath);
      switch (extension) {
        case '.jpg':
          contextMenu = getJpgContextMenu();
          await tray.setContextMenu(contextMenu);
          tray.popUpContextMenu();
          break;
        case '.png':
          contextMenu = getPngContextMenu();
          await tray.setContextMenu(contextMenu);
          tray.popUpContextMenu();
          break;
      }
    }
  });
};

app.whenReady().then(() => {
  const icon = nativeImage.createFromPath('./icon.png');
  tray = new Tray(icon.resize({ width: 16, height: 16 }));
  tray.on('click', () => {
    rightClickHandler();
  });
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
