import { user } from '../Models/user.model';
export interface Token{
    accesstoken: string;
    message: string;
    user: user;
} 