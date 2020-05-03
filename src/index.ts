// tslint:disable-next-line
const electron = require("electron");
const {app, BrowserWindow, Menu, dialog} = electron;

app.on('window-all-closed', () => {{
    app.quit();
}
});

app.on("ready", () => {

	let mainWindow = new BrowserWindow({width: 620, height: 200, resizable: false});
	mainWindow.loadURL("file://" + __dirname + "/pages/index.html");

	mainWindow.on("closed", () => {
		mainWindow = null;
	});

	Menu.setApplicationMenu(Menu.buildFromTemplate(mainMenuTemplate));

});

const mainMenuTemplate = [
	{
		label: "Clicker Game",
		submenu: [
			{
				label: "Leaderboard (beta)",
				click() {
					dialog.showMessageBox(null, {
						type: "info",
						buttons: ["Okay"],
						defaultId: 1,
						Title: "Information",
						message: "Apologies, this area is for the app developer only as it is not yet stable."
					});
				}
			},
			{
				label: "Quit Game",
				accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
				click() {
					app.quit();
				}
			}
		]
	},
	{
		label: process.env.user || process.env.username
	}
]