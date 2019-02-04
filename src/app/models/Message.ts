import { User } from './User';

export class Message {
    user?: User;
    messageContent?: string;
    seen?: boolean;
}