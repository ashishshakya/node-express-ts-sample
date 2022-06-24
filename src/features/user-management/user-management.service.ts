import Logger from '../../logger/logger';
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
    this.logger.log('userID', userId);
    return this.userManagementRepository.getUserById(userId);
  };
}

export default UserManagementService;
