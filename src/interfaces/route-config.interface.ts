import { Request, Response } from 'express';
import { ObjectSchema } from 'joi';

interface IRouteConfigSchema {
  request?: {
    params?: ObjectSchema;
    query?: ObjectSchema;
    body?: ObjectSchema;
  };
}

interface IRouteConfig {
  route: {
    path: string;
    method: string;
  };
  handler: (request: Request, response: Response) => void;
  middlewares: undefined[];
  schema: IRouteConfigSchema;
}

export default IRouteConfig;
export { IRouteConfig, IRouteConfigSchema };
