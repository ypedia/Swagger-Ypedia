import { Router } from 'express';

export const exampleRoutes = Router();

exampleRoutes.get('/', (request, response) => {
  return response.json({ message: 'Backend Ypedia' });
});
