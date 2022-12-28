import { AppError } from '@errors/AppError';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';

import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to authenticate an user ', async () => {
    const user: ICreateUserDTO = {
      driver_license: '123412',
      email: 'levy@gmail.com',
      password: '1234',
      name: 'Levy',
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('should be able to authenticate an nonexistent user', () => {
    expect(async () => {
      await authenticateUserCase.execute({
        email: 'emailfalso@gmail.com',
        password: '1234',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorrect password', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '14123412',
        email: 'levy@gmail.com',
        password: '1234',
        name: 'Levy',
      };

      await createUserUseCase.execute(user);

      await authenticateUserCase.execute({
        email: user.email,
        password: '1235',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
