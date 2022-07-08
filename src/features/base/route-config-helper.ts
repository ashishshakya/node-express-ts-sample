import { Router } from 'express';
import IRouteConfig from '../../interfaces/route-config.interface';
import validateRouteSchema from '../../middlewares/validation.middleware';

const generateRouterMapping = (router: Router, basePath: string, routeConfigs: IRouteConfig[]) => {
  for (const routeConfig of routeConfigs) {
    const routePath = routeConfig.route.path ? basePath + routeConfig.route.path : basePath;
    const httpMethod = routeConfig.route.method.toLowerCase();
    const schemaValidator = validateRouteSchema(routeConfig.schema);
    const handler = routeConfig.handler;

    router[httpMethod](routePath, schemaValidator, ...routeConfig.middlewares, handler);
  }
};

export default generateRouterMapping;
