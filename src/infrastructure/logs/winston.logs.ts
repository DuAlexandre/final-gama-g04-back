import winston from "winston";
import path from 'path';
import 'dotenv/config';

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
};

const level = () => {
    const env = process.env.ENV || "development"
    const isDevelopment = env === "development"
    return isDevelopment ? "debug" : "warn"
};

const colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "white"
};

winston.addColors(colors);

const format = winston.format.combine(
    winston.format.timestamp({format: "YYYY-MM-DD HH:mm:ss:ms"}),
    winston.format.colorize({all: true}),
    winston.format.printf(
        (info) => `${info.timestamp} - ${info.level}: ${info.message}`
    )
);

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({ filename: path.resolve('log', 'error.log'), level: "error" }),
    new winston.transports.File({ filename: path.resolve('log', 'info.log'), level: "info" })
];

const logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports
});

export default logger;