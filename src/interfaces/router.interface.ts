import { Router } from 'express';

interface IRouter {
  getFeatureName: () => string;
  getRouter: () => Router;
  initializeRoutes: () => void;
}

export default IRouter;
