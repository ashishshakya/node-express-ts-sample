import { Router } from 'express';

export default interface IRouter {
  getFeatureName: () => string;
  getRouter: () => Router;
  initializeRoutes: () => void;
}
