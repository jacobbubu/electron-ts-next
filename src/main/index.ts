// Native
import * as path from 'path'
import { format as formatUrl } from 'url'

// Packages
import { app, BrowserWindow, ipcMain, globalShortcut } from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'

// Utils
import fileIntercept from './file-interception'

let mainWindow: Electron.BrowserWindow | undefined

function createMainWindow() {
  // Create the browser window.
  const window = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: false,
      preload: path.resolve(__dirname, 'preload.js')
    }
  })

  console.log('isDev', isDev)
  if (!isDev) {
    fileIntercept()
  }

  globalShortcut.register('CommandOrControl+R', function() {
    console.log('CommandOrControl+R is pressed')
    window.reload()
  })

  const url = isDev
    ? 'http://localhost:8000/home'
    : formatUrl({
        pathname: path.join(__dirname, '../renderer/home/index.html'),
        protocol: 'file:',
        slashes: true
      })

  window.loadURL(url)

  // Emitted when the window is closed.
  window.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = undefined
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  window.webContents.toggleDevTools()

  return window
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (!mainWindow) {
    mainWindow = createMainWindow()
  }
})

// create main BrowserWindow when electron is ready
app.on('ready', async () => {
  if (isDev) {
    await prepareNext({ development: './src/renderer', production: './app/app/renderer' })
  }

  mainWindow = createMainWindow()
})

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on('message', (event: Electron.Event, message: string) => {
  event.sender.send('message', message)
})
