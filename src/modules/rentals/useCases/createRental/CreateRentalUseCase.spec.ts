import dayjs from 'dayjs';

import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { RentalsRepositoryInMemory } from '@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory';
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';

import { AppError } from '../../../../shared/errors/AppError';
import { CreateRentalUseCase } from './CreateRentalUseCase';

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let dayjsDateProvider: DayjsDateProvider;

describe('Create Rental', () => {
  const dayAdd24Hours = dayjs().add(1, 'day').toDate();
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    dayjsDateProvider = new DayjsDateProvider();
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayjsDateProvider,
      carsRepositoryInMemory,
    );
  });

  it('should be able to create a new rental', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    const rental = await createRentalUseCase.execute({
      user_id: '1243134',
      car_id: car.id,
      expected_return_date: dayAdd24Hours,
    });

    expect(rental).toHaveProperty('id');
    expect(rental).toHaveProperty('start_date');
  });

  it('should not be able to create a new rental if there is another open to the same user', async () => {
    await rentalsRepositoryInMemory.create({
      car_id: '2346327',
      expected_return_date: dayAdd24Hours,
      user_id: '1243134',
    });

    await expect(
      createRentalUseCase.execute({
        user_id: '1243134',
        car_id: '35623562534',
        expected_return_date: dayAdd24Hours,
      }),
    ).rejects.toEqual(new AppError('There is a rental in progress for user!'));
  });

  it('should not be able to create a new rental if there is another open to the same car', async () => {
    await rentalsRepositoryInMemory.create({
      car_id: 'test',
      expected_return_date: dayAdd24Hours,
      user_id: '12431345476456',
    });

    await expect(
      createRentalUseCase.execute({
        user_id: '1243134',
        car_id: 'test',
        expected_return_date: dayAdd24Hours,
      }),
    ).rejects.toEqual(new AppError('Car is unavailable!'));
  });

  it('should not be able to create a new rental with invalid return time', async () => {
    await expect(
      createRentalUseCase.execute({
        user_id: '3562345',
        car_id: 'test',
        expected_return_date: dayjs().toDate(),
      }),
    ).rejects.toEqual(new AppError('Invalid return time!'));
  });
});
