import { hash } from 'bcrypt';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { v4 as uuidV4 } from 'uuid';

import { User } from '@modules/accounts/infra/typeorm/entities/User';

export class UserAdminSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const id = uuidV4();
    const password = await hash('admin', 8);
    const userRepository = dataSource.getRepository(User);
    const user = {
      id: `${id}`,
      name: 'admin',
      password: `${password}`,
      email: 'admin@rentx.com',
      driver_license: '12345',
      isAdmin: true,
      created_at: new Date(),
      avatar: 'eehgwed345613sfga',
    };

    const newUser = userRepository.create(user);
    await userRepository.save(newUser);
  }
}
