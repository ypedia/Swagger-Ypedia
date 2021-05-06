const { Router } = require('express');

const exampleRoutes = Router();

exampleRoutes.get('/', (request, response) => {
  return response.json({ message: 'Backend Ypedia' });
});

module.exports = { exampleRoutes };
