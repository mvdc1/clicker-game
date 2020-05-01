import express from "express";
import winston from "winston";
const web = express();
const log = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: "logs/main.log"})
      ]
})

function logc(c:string) {
    log.info(c);
}

function logf(c:string) {
    log.log({
        level: 'info',
        message: c
      });
}

web.get("/", (req, res) => {
    res.send("Hello world!");
} );

web.listen(80, () => {
    const date = new Date()
    logf("Started clicker at " + date + ", link: localhost:80")
} );