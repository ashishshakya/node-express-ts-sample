import { Router } from 'express';
import IRouter from '../../interfaces/router.interface';
import Logger from '../../logger/logger';
import UserManagementController from './user-management.controller';

class UserManagementRouter implements IRouter {
  private featureName: string;
  private logger: Logger;
  private userManagementController: UserManagementController;
  private router: Router;
  private path = '/api/v1/users';

  constructor({ featureName, logger, userManagementController }) {
    this.featureName = featureName;
    this.logger = logger;
    this.userManagementController = userManagementController;
    this.router = Router();
    this.initializeRoutes();
  }

  getFeatureName = () => {
    return this.featureName;
  };

  getRouter = () => {
    return this.router;
  };

  initializeRoutes = () => {
    this.router
      .get(`${this.path}`, this.userManagementController.getAllUsers)
      .get(`${this.path}/:userId`, this.userManagementController.getUserById)
      .post(`${this.path}`, this.userManagementController.createUser)
      .put(`${this.path}/:userId`, this.userManagementController.updateUser)
      .delete(`${this.path}/:userId`, this.userManagementController.deleteUserById);
  };
}

export default UserManagementRouter;
