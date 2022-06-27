require('dotenv').config();

const app = require('./api');

const router = require('./routes');

const { errorMiddleware } = require('./middlewares');

const port = process.env.API_PORT;

app.use(router);

app.use(errorMiddleware);

app.listen(port, () => console.log('ouvindo porta', port));
