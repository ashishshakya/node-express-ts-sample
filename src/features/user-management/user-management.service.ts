import Logger from '../../logger/logger';
import { IUser } from '../../models/user.model';
import UserManagementRepository from './user-management.repository';

class UserManagementService {
  private logger: Logger;
  private userManagementRepository: UserManagementRepository;

  constructor({ logger, userManagementRepository }) {
    this.logger = logger;
    this.userManagementRepository = userManagementRepository;
  }

  getAllUsers = async () => {
    return this.userManagementRepository.getAllUsers();
  };

  getUserById = async (userId: number) => {
    return this.userManagementRepository.getUserById(userId);
  };

  createUser = async (userDetails: IUser) => {
    return this.userManagementRepository.createUser(userDetails);
  };
}

export default UserManagementService;
