import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import Logger from './logger/logger';
import getLogger from './logger';
import IRouter from './interfaces/IRouter';

class App {
  private app: express.Application;
  private port: number;
  private logger: Logger;

  constructor(routers: IRouter[], port: number) {
    dotenv.config();
    this.logger = getLogger('App');
    this.app = express();
    this.port = port;

    this.uncaughtExceptionHandler();
    this.initializeMiddlewares();
    this.initializeRoutes(routers);
  }

  initializeMiddlewares = () => {
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use(helmet({ crossOriginResourcePolicy: false }));
  };

  initializeRoutes = (routers: IRouter[]) => {
    routers.forEach((router) => {
      this.app.use('/', router.getRouter());
      this.logger.info(`Registered routes for ${router.getFeatureName()}`);
    });
  };
  uncaughtExceptionHandler = () => {
    process
      .on('unhandledRejection', (reason, p) => {
        this.logger.error('Unhandled Rejection at Promise', reason, p);
        throw reason;
      })
      .on('uncaughtException', (err) => {
        this.logger.error('Uncaught Exception thrown', err);
        process.exit(1);
      });
  };

  listen = () => {
    this.app.listen(this.port, () => {
      this.logger.info(`App listening on the port ${this.port}`);
    });
  };
}

export default App;
