import { UserData } from '../interfaces/UserData';
import { UserRepository } from '../interfaces/UserRepository';

export class InMemoryUserRepository implements UserRepository {
  private repository : UserData[];

  constructor(repository : UserData[]) {
    this.repository = repository;
  }

  add(user: UserData): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findUserByEmail(email: string): Promise<UserData> {
    return null;
  }

  findAllUsers(): Promise<UserData[]> {
    throw new Error('Method not implemented.');
  }
}
