import { Router } from 'express';
import Joi from 'joi';
import IRouteConfig from '../../interfaces/route-config.interface';
import IRouter from '../../interfaces/router.interface';
import Logger from '../../logger/logger';
import generateRouterMapping from '../base/route-config-helper';
import UserManagementController from './user-management.controller';

class UserManagementRouter implements IRouter {
  private featureName: string;
  private logger: Logger;
  private userManagementController: UserManagementController;
  private router: Router;
  private path = '/api/v1/users';
  private routeConfigs: IRouteConfig[];

  constructor({ featureName, logger, userManagementController }) {
    this.featureName = featureName;
    this.logger = logger;
    this.userManagementController = userManagementController;
    this.router = Router();
    this.initializeRouteConfigs();
    this.initializeRoutes();
  }

  getFeatureName = () => {
    return this.featureName;
  };

  getRouter = () => {
    return this.router;
  };

  initializeRouteConfigs = () => {
    this.routeConfigs = [
      {
        route: {
          path: '',
          method: 'GET',
        },
        handler: this.userManagementController.getAllUsers,
        middlewares: [],
        schema: {},
      },
      {
        route: {
          path: '/:userId',
          method: 'GET',
        },
        handler: this.userManagementController.getUserById,
        middlewares: [],
        schema: {
          request: {
            params: Joi.object().keys({
              userId: Joi.number().required(),
            }),
          },
        },
      },
      {
        route: {
          path: '',
          method: 'POST',
        },
        handler: this.userManagementController.createUser,
        middlewares: [],
        schema: {
          request: {
            body: Joi.object().keys({
              userName: Joi.string().required(),
              firstName: Joi.string(),
              lastName: Joi.string(),
            }),
          },
        },
      },
      {
        route: {
          path: '/:userId',
          method: 'PUT',
        },
        handler: this.userManagementController.updateUser,
        middlewares: [],
        schema: {
          request: {
            params: Joi.object().keys({
              userId: Joi.number().required(),
            }),
            body: Joi.object().keys({
              userId: Joi.number().required(),
              userName: Joi.string().required(),
              firstName: Joi.string(),
              lastName: Joi.string(),
            }),
          },
        },
      },
      {
        route: {
          path: '/:userId',
          method: 'DELETE',
        },
        handler: this.userManagementController.deleteUserById,
        middlewares: [],
        schema: {
          request: {
            params: Joi.object().keys({
              userId: Joi.number().required(),
            }),
          },
        },
      },
    ];
  };

  initializeRoutes = () => {
    generateRouterMapping(this.router, this.path, this.routeConfigs);
  };
}

export default UserManagementRouter;
