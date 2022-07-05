import dotenv from 'dotenv';
dotenv.config();

import App from './app';
import userManagementRouter from './features/user-management';

const app = new App([userManagementRouter], 8100);

export default app;
