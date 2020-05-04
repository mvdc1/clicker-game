// tslint:disable-next-line
const electron = require("electron"); // Enabling Electron in project.
import * as process from "process";
const {app, BrowserWindow, Menu, dialog} = electron; // Setting up Electron.

app.on("window-all-closed", () => {
	{
		// Ensuring that the application closes when the close button is selected.
		app.quit();
	}
});

app.on("ready", () => {
	let mainWindow = new BrowserWindow({width: 620, height: 200, resizable: false}); // Sets the application window.
	mainWindow.loadURL("file://" + __dirname + "/pages/index.html"); // Points to file to display.

	mainWindow.on("closed", () => {
		mainWindow = null; // Ensuring that the application closes when the close button is selected.
	});

	Menu.setApplicationMenu(Menu.buildFromTemplate(mainMenuTemplate)); // Setting up main menu.
});

const mainMenuTemplate = [
	{
		label: "Clicker Game (" + process.env.username + ")",
		submenu: [
			{
				label: "Leaderboard (beta)",
				click() {
					dialog.showMessageBox(null, {
						type: "info",
						buttons: ["Okay"],
						defaultId: 1,
						Title: "Information",
						message: "Apologies, this area is for the app developer only as it is not yet stable.",
					});
				},
			},
			{
				label: "Quit Game",
				accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
				click() {
					app.quit();
				},
			},
		],
	},
];
