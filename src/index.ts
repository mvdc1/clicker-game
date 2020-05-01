import express from "express";
import * as path from "path";
import {createLogger, format, transports} from "winston";

const web = express();
const log = createLogger({
	transports: [new transports.Console({format: format.simple()}), new transports.File({filename: "logs/main.json"})]
});

function logm(c: string) {
	log.log({
		level: "info",
		message: c
	});
}

web.use(express.static(path.join(__dirname, "pages")));

web.listen(process.env.PORT, (err) => {
	const date = new Date();
	if (err) {
		logm("Attempted clicker website at " + date.getHours() + ":" + date.getMinutes() + "." + date.getSeconds() + " on " + date.getMonth() + date.getDate() + ", although an error occurred.");
	} else {
		logm("Started clicker website at " + date.getHours() + ":" + date.getMinutes() + "." + date.getSeconds() + " on " + date.getMonth() + date.getDate() + ", URL: localhost:" + process.env.PORT);
	}
});
