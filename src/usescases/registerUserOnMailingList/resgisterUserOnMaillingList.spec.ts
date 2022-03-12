import { UserData } from './UserData';

describe('Register User on Mailing List', () => {
    test('should add user with complete data do mailing list', async () => {
        const users: UserData[] = [];
        const repo: UserData[] = InMemoryUserRepository(users);
        const usecase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repo);
        const name = 'any_name';
        const email = 'any@email.com';
        const response = await usecase.registerUserOnMailingList({ name, email });
        const user = await repo.findUserByEmail(email);

        expect(user.name).toBe(name);
      
    });

});




