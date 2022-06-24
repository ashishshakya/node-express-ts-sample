import { Sequelize } from 'sequelize';
import * as mysql2 from 'mysql2';
import Logger from '../logger/logger';

class DbDriver {
  private logger: Logger;
  private sequelize: Sequelize;

  constructor({ logger }) {
    this.logger = logger;
  }

  getDBConnection = async () => {
    if (!this.sequelize) {
      this.sequelize = await this.connectToDatabase();
    }
    return this.sequelize;
  };

  connectToDatabase = async () => {
    try {
      const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        dialect: 'mysql',
        dialectModule: mysql2,
        dialectOptions: {
          connectTimeout: 25000,
        },
        host: process.env.DB_HOST,
        logging: this.logger.log,
        port: Number.parseInt(process.env.DB_PORT),
      });
      await sequelize.authenticate();
      return sequelize;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  };
}

export default DbDriver;
