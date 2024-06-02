const { Menu } = require('electron');
const {
  convertPngToGif,
  convertPngToJpg,
  convertPngToWebP,
  convervtPngToAvif,
} = require('./converters');
const applescript = require('applescript');


const getJpgContextMenu = () => {
  const contextMenu = [
    {
      label: 'Convert JPG to PNG',
      click: async () => {
        applescript.execString(script, (err, rtn) => {
          if (err) {
            console.error('Error:', err);
          } else {
            console.log('rtn', rtn);
            convertPngToJpg(rtn);
          }
        });
      },
    },
  ];

  const menu = Menu.buildFromTemplate(contextMenu);
  return menu;
};

const getPngContextMenu = () => {
  const contextMenu = [
    {
      label: 'Convert PNG to JPEG',
      click: async () => {
        applescript.execString(script, (err, rtn) => {
          if (err) {
            console.error('Error:', err);
          } else {
            console.log('rtn', rtn);
            convertPngToJpg(rtn);
          }
        });
      },
    },
    {
      label: 'Convert PNG to WebP',
      click: async () => {
        applescript.execString(script, (err, rtn) => {
          if (err) {
            console.error('Error:', err);
          } else {
            console.log('rtn', rtn);
            convertPngToWebP(rtn);
          }
        });
      },
    },
    {
      label: 'Convert PNG to GIF',
      click: async () => {
        applescript.execString(script, (err, rtn) => {
          if (err) {
            console.error('Error:', err);
          } else {
            console.log('rtn', rtn);
            convertPngToGif(rtn);
          }
        });
      },
    },

    {
      label: 'Convert PNG to AVIF',
      click: async () => {
        applescript.execString(script, (err, rtn) => {
          if (err) {
            console.error('Error:', err);
          } else {
            console.log('rtn', rtn);
            convervtPngToAvif(rtn);
          }
        });
      },
    },
  ];

  const menu = Menu.buildFromTemplate(contextMenu);
  return menu;
};

module.exports = {
    getPngContextMenu,
    getJpgContextMenu,
}