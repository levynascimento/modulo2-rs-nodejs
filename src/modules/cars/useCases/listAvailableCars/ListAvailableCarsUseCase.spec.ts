import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Carro description',
      daily_rate: 130.0,
      license_plate: 'FED-1224542',
      fine_amount: 100,
      brand: 'Car Brand',
      category_id: 'car category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car2',
      description: 'Carro description',
      daily_rate: 130.0,
      license_plate: 'FED-1224542',
      fine_amount: 100,
      brand: 'Car Brand',
      category_id: 'car category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Car Brand',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'Carro description',
      daily_rate: 130.0,
      license_plate: 'FED-1224542',
      fine_amount: 100,
      brand: 'Car Brand',
      category_id: 'car category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Car3',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category_id', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'Carro description',
      daily_rate: 130.0,
      license_plate: 'FED-1224542',
      fine_amount: 100,
      brand: 'Car Brand',
      category_id: '12345',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: '12345',
    });

    expect(cars).toEqual([car]);
  });
});
