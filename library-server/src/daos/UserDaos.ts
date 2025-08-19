//data access objects(daos)
import mongoose,{Schema,Document} from 'mongoose'
import { IUser } from '../models/Users'
 
export interface IUserModel extends IUser, Document {};

const UserSchema = new Schema(
    {
        type: {type:String, required: true},
        firstName: {type:String, required: true},
        lastName: {type:String, required: true},
        email: {type:String, required: true, unique: true, lowercase: true},
        password: {type:String, required: true}
    },
    {
        versionKey: false, timestamps: true
    }
);

export default mongoose.model<IUserModel>('User', UserSchema)