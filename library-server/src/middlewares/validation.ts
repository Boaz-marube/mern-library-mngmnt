import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { IUser } from '../models/Users';

export const ValidateSchema = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error) {
            return res.status(422).json({ message: 'Object validation failed, please include a valid object' });
        }
    };
};

export const Schemas = {
    user: {
        create: Joi.object<IUser>({
            type: Joi.string().valid('ADMIN','EMPLOYEE','PATRON'),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string()
                .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                .required(),
            password: Joi.string().required()
        }),
        login: Joi.object<{email:string, password:string}>({
            email: Joi.string()
                .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                .required(),
            password: Joi.string().required()
        })
        
    }
};
