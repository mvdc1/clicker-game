const electron = require("electron");
import * as path from "path";
import {createLogger, format, transports} from "winston";
const {app, BrowserWindow, Menu} = electron;
const log = createLogger({
	transports: [new transports.Console({format: format.simple()}), new transports.File({filename: "logs/main.json"})],
});

function logm(c: string) {
	log.log({
		level: "info",
		message: c,
	});
	return;
}

app.on('window-all-closed', function() {{ 
    app.quit(); 
} 
}); 

app.on("ready", function () {

	let mainWindow = new BrowserWindow({width: 590, height: 200, resizable: false});
	mainWindow.loadURL("file://" + __dirname + "/pages/index.html");
	logm("Done.");

	mainWindow.on("closed", function () {
		mainWindow = null;
	});

	Menu.setApplicationMenu(Menu.buildFromTemplate(mainMenuTemplate));

	//let scoreboard = new BrowserWindow({width: 300, height: 800});

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
				accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
				click() {
					app.quit();
				}
			}
		]
	}
]