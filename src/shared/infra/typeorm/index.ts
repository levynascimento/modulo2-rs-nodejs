import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { Category } from '@modules/cars/infra/typeorm/entities/Category';
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

import 'reflect-metadata';
import { MainSeeder } from './seed/MainSeeder';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  synchronize: false,
  logging: false,
  entities: [User, Category, Specification, Car],
  migrations: ['./src/shared/infra/migration/*.ts'],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);

export function createConnection(
  host = 'database_ignite',
): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export { dataSource };
