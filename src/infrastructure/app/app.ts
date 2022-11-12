import express from 'express';
import * as http from 'http';
import 'dotenv/config';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';

import cors from 'cors';
import debug from 'debug';

import { CommonRoutesConfig } from '../../adapters/apis/routes/common/common.routes.config';
import logger from '../logs/winston.logs';
import { ProductsRoutes } from '../../adapters/apis/routes/products/products.routes.config';
import { TablesRoutes } from '../../adapters/apis/routes/tables/tables.routes.config';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = process.env.PORT || 3000;
const routes : CommonRoutesConfig[] = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());
app.use(cors());

const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if(!process.env.DEBUG) {
    loggerOptions.meta = false;
};

app.use(expressWinston.logger(loggerOptions));

routes.push(new ProductsRoutes(app));
routes.push(new TablesRoutes(app));

const runningMessage = `Server running on port ${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
});

server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Configured routes for ${route.getName()}`);
    });
    logger.info(runningMessage);
});

export default app;