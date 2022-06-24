import getLogger from '../../logger';
import dbDriver from '../../db-driver';
import UserManagementRepository from './user-management.repository';
import UserManagementService from './user-management.service';
import UserManagementController from './user-management.controller';
import UserManagementRouter from './user-management.router';

const featureName = 'UserManagement';
const logger = getLogger(featureName);
const userManagementRepository = new UserManagementRepository({ logger, dbDriver });
const userManagementService = new UserManagementService({ logger, userManagementRepository });
const userManagementController = new UserManagementController({ logger, userManagementService });
const userManagementRouter = new UserManagementRouter({ featureName, logger, userManagementController });

export default userManagementRouter;
export { userManagementRouter, userManagementController, userManagementService, userManagementRepository };
