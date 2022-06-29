import { Sequelize } from 'sequelize';
import * as mysql2 from 'mysql2';
import Logger from '../logger/logger';
import SystemSettings from '../system-settings/system-settings';

class DbDriver {
  private logger: Logger;
  private sequelize: Sequelize;
  private systemSettings: SystemSettings;

  constructor({ logger, systemSettings }) {
    this.logger = logger;
    this.systemSettings = systemSettings;
  }

  getDBConnection = async () => {
    if (!this.sequelize) {
      this.sequelize = await this.connectToDatabase();
      this.logger.info('Successfully established DB Connection');
    }
    return this.sequelize;
  };

  private connectToDatabase = async () => {
    try {
      const sequelize = new Sequelize(
        this.systemSettings.dbName,
        this.systemSettings.dbUser,
        this.systemSettings.dbPassword,
        {
          dialect: 'mysql',
          dialectModule: mysql2,
          dialectOptions: {
            connectTimeout: 30000,
          },
          pool: {
            max: 5,
            min: 1,
            acquire: 30000,
            idle: 10000,
          },
          host: this.systemSettings.dbHost,
          logging: (sql) => {
            this.logger.info(sql);
          },
          port: this.systemSettings.dbPort,
        },
      );
      await sequelize.authenticate();
      return sequelize;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  };
}

export default DbDriver;
