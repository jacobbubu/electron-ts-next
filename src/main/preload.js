// Packages
const { ipcRenderer, protocol } = require('electron');

// Since we disabled nodeIntegration we can reintroduce
// needed node functionality here
process.once('loaded', () => {
  global.ipcRenderer = ipcRenderer;
  global.protocol = protocol;
})
