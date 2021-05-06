const express = require('express');
const swaggerUi = require('swagger-ui-express');

const { router } = require('./routes');
const swaggerFile = require('./swagger.json');

const PORT = process.env.PORT || 3333;
const app = express();

app.use(express.json());

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
