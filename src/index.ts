import express from "express";
import {createLogger, format, transports} from "winston";

const web = express();
const log = createLogger({
	transports: [new transports.Console({format: format.simple()}), new transports.File({filename: "logs/main.json"})],
});

function logm(c: string) {
	log.log({
		level: "info",
		message: c,
	});
}

web.get("/", (req, res) => {
	res.sendFile(__dirname + "/pages/index.html");
});

web.listen(80, (err) => {
	const date = new Date();
	if (err) {
		logm("Attempted clicker website at " + date.getHours() + ":" + date.getMinutes() + "." + date.getSeconds() + " on " + date.getMonth() + date.getDate() + ", although an error occurred.");
	} else {
		logm("Started clicker website at " + date.getHours() + ":" + date.getMinutes() + "." + date.getSeconds() + " on " + date.getMonth() + date.getDate() + ", URL: localhost:80");
	}
});
