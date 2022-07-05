import { Sequelize } from 'sequelize';
import DbDriver from '../db-driver/db-driver';
import Logger from '../logger/logger';

import buildUserModel from './user.model';

class DbModelHelper {
  private logger: Logger;
  private dbDriver: DbDriver;
  private dbModelBuilders: ((sequelize: Sequelize) => void)[];

  constructor({ logger, dbDriver }) {
    this.logger = logger;
    this.dbDriver = dbDriver;
    this.populateDbModelBuilders();
  }

  private populateDbModelBuilders = () => {
    this.dbModelBuilders = [buildUserModel];
  };

  initializeDBModels = async () => {
    const sequelize = await this.dbDriver.getDBConnection();

    this.dbModelBuilders.forEach((dbModelBuilder) => {
      dbModelBuilder(sequelize);
    });

    this.logger.info('Successfully created DB Models');
  };
}

export default DbModelHelper;
