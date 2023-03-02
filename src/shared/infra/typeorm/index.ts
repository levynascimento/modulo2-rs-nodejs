import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { UserTokens } from '@modules/accounts/infra/typeorm/entities/UserTokens';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { CarImage } from '@modules/cars/infra/typeorm/entities/CarImage';
import { Category } from '@modules/cars/infra/typeorm/entities/Category';
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';
import { Rental } from '@modules/rentals/infra/typeorm/entities/Rental';

import 'reflect-metadata';

import { MainSeeder } from './seed/MainSeeder';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: process.env.NODE_ENV === 'test' ? 'rentx_test' : 'rentx',
  synchronize: false,
  logging: false,
  entities: [User, Category, Specification, Car, CarImage, Rental, UserTokens],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);

export function createConnection(host = 'localhost'): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export { dataSource };
