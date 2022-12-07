import { Router } from 'express';

import { CategoryRepositories } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepositories();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
