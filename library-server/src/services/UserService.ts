import bcrypt from 'bcrypt'

import {config} from '../config'

import UserDaos,{IUserModel} from '../daos/UserDaos'
import { IUser } from '../models/Users'

export async function register(user:IUser):Promise<IUserModel>{
    const ROUNDS = config.server.rounds;
    try {
        const hashedPassword = await bcrypt.hash(user.password, ROUNDS);
        
        const saved = new UserDaos({...user, password:hashedPassword});

        return await saved.save();
    } catch (error) {
        throw new Error('Unable to create user at this time')
    }
}