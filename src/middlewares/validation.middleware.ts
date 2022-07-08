import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';
import { IRouteConfigSchema } from '../interfaces/route-config.interface';

const validateRouteSchema =
  (schema: IRouteConfigSchema) => async (request: Request, response: Response, next: NextFunction) => {
    try {
      if (!schema.request) {
        next();
        return;
      }
      if (schema.request.params) {
        request.params = await validateSchema(schema.request.params, request.params || {});
      }
      if (schema.request.query) {
        request.query = await validateSchema(schema.request.query, request.query || {});
      }
      if (schema.request.body) {
        request.body = await validateSchema(schema.request.body, request.body || {});
      }
      next();
    } catch (error) {
      response.status(400).json({ error });
    }
  };

const validateSchema = async (schema: Schema, value: unknown) => {
  return schema.validateAsync(value, {
    stripUnknown: {
      objects: true,
    },
  });
};

export default validateRouteSchema;
export { validateRouteSchema, validateSchema };
