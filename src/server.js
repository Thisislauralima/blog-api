require('dotenv').config();

const app = require('./api');

const router = require('./routes');

const { errorMiddleware } = require('./middlewares');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;
app.use(router);

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(errorMiddleware);

app.listen(port, () => console.log('ouvindo porta', port));
