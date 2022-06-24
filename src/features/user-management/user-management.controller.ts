import { Request, Response } from 'express';
import Logger from '../../logger/logger';
import UserManagementService from './user-management.service';

class UserManagementController {
  private logger: Logger;
  private userManagementService: UserManagementService;

  constructor({ logger, userManagementService }) {
    this.logger = logger;
    this.userManagementService = userManagementService;
  }

  getAllUsers = async (request: Request, response: Response) => {
    try {
      const users = await this.userManagementService.getAllUsers();
      response.json(users);
    } catch (error) {
      this.logger.error('getAllUsers', error);
      response.status(error.status || 500).send({ error });
    }
  };

  getUserById = async (request: Request, response: Response) => {
    try {
      const userId = parseInt(request.params.userId);
      this.logger.log('userID', userId);
      const user = await this.userManagementService.getUserById(userId);
      response.json(user);
    } catch (error) {
      this.logger.error('getUserById', error);
      response.status(error.status || 500).send({ error });
    }
  };

  createUser = async (request: Request, response: Response) => {
    try {
      response.status(201).json({ status: 'Success' });
    } catch (error) {
      this.logger.error('createUser', error);
      response.status(error.status || 500).send({ error });
    }
  };

  updateUser = async (request: Request, response: Response) => {
    try {
      response.json({ status: 'Success' });
    } catch (error) {
      this.logger.error('updateUser', error);
      response.status(error.status || 500).send({ error });
    }
  };

  deleteUserById = async (request: Request, response: Response) => {
    try {
      response.json({ status: 'Success' });
    } catch (error) {
      this.logger.error('deleteUserById', error);
      response.status(error.status || 500).send({ error });
    }
  };
}

export default UserManagementController;
