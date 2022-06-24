import DbDriver from '../../db-driver/db-driver';
import Logger from '../../logger/logger';

class UserManagementRepository {
  private logger: Logger;
  private dbDriver: DbDriver;

  constructor({ logger, dbDriver }) {
    this.logger = logger;
    this.dbDriver = dbDriver;
  }

  getAllUsers = async () => {
    // const sequelize = await this.dbDriver.getDBConnection();
    // this.logger.log('sequelize', sequelize);
    return [
      { id: 1, name: 'One' },
      { id: 2, name: 'Two' },
    ];
  };

  getUserById = async (userId: number) => {
    // const sequelize = await this.dbDriver.getDBConnection();
    // this.logger.log('sequelize', sequelize);
    this.logger.log('userID', userId);
    return { id: 1, name: 'One' };
  };
}

export default UserManagementRepository;
