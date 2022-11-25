const {app, BrowserWindow} = require('electron')
const path = require('path')

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    mainWindow.loadFile('index.html').then(() => {
        console.log("Walking Meow Debut")
    })
}

// 程序启动后创建主窗口
app.whenReady().then(() => {
    createWindow()

    // 如果 mac os 所有窗口被关闭, 则自动创建一个新的
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

// 监听 windows 和 linux 的关闭, mac os 不受此约束
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})