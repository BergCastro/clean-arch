import { UserData } from '../interfaces/UserData';
import { InMemoryUserRepository } from './InMemoryUserRepository';

describe('In memory UserRepository', () => {
  test('should return if user not found', async () => {
    const users: UserData[] = [];
    const userRepo = new InMemoryUserRepository(users);
    const user = await userRepo.findUserByEmail('any@mail.com');
    expect(user).toBeNull();
  });
});
