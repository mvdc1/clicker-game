// tslint:disable-next-line
const electron = require("electron");
const {app, BrowserWindow, Menu} = electron;

app.on('window-all-closed', () => {{
    app.quit();
}
});

app.on("ready", () => {

	let mainWindow = new BrowserWindow({width: 590, height: 200, resizable: false});
	mainWindow.loadURL("file://" + __dirname + "/pages/index.html");

	mainWindow.on("closed", () => {
		mainWindow = null;
	});

	Menu.setApplicationMenu(Menu.buildFromTemplate(mainMenuTemplate));

	// let scoreboard = new BrowserWindow({width: 300, height: 800});

});

const mainMenuTemplate = [
	{
		label: "Clicker Game",
		submenu: [
			{
				label: "Game"
			},
			{
				label: "Scoreboard"
			},
			{
				label: "Quit Game",
				accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
				click() {
					app.quit();
				}
			}
		]
	}
]