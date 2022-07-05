import DbDriver from '../../db-driver/db-driver';
import Logger from '../../logger/logger';
import { IUser, User } from '../../models/user.model';

class UserManagementRepository {
  private logger: Logger;
  private dbDriver: DbDriver;
  private UserModel: typeof User;

  constructor({ logger, dbDriver, UserModel }) {
    this.logger = logger;
    this.dbDriver = dbDriver;
    this.UserModel = UserModel;
  }

  getAllUsers = async () => {
    return this.UserModel.findAndCountAll();
  };

  getUserById = async (userId: number) => {
    return this.UserModel.findOne({
      where: {
        userId,
      },
    });
  };

  createUser = async (userDetails: IUser) => {
    return this.UserModel.create(userDetails);
  };
}

export default UserManagementRepository;
