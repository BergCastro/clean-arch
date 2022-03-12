import { UserData } from './UserData';

export interface UserRepository {
    add(user: UserData): Promise<void>;
    findUserByEmail(email: string): Promise<UserData>;
    findAllUsers(): Promise<UserData[]>;
}
