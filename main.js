console.log('welcome electron')
const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')

const createWindow = () => {
    console.log('my-read')
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
        preload:path.join(__dirname,'preload.js')
    }
  })
  console.log('my-read-after',win)
  ipcMain.handle('ping',()=>'pong')
  win.loadFile('index.html')
  
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate',()=>{
    if(BrowserWindow.getAllWindows().length  === 0){
        createWindow()
    }
  })
})

app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})