import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { router } from './routes';
import swaggerFile from './swagger.json';

const PORT = 3333;
const app = express();

app.use(express.json());

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
