import DbDriver from '../../db-driver/db-driver';
import Logger from '../../logger/logger';
import { IUser, User } from '../../models/user.model';

class UserManagementRepository {
  private logger: Logger;
  private dbDriver: DbDriver;

  constructor({ logger, dbDriver }) {
    this.logger = logger;
    this.dbDriver = dbDriver;
  }

  getAllUsers = async () => {
    return User.findAndCountAll();
  };

  getUserById = async (userId: number) => {
    return User.findOne({
      where: {
        userId,
      },
    });
  };

  createUser = async (userDetails: IUser) => {
    return User.create(userDetails);
  };
}

export default UserManagementRepository;
