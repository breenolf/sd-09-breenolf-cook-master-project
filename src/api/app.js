const express = require('express');
const usersRouter = require('../../routes/users');
const errorPattern = require('../../middlewares/errorPattern');

const app = express();

app.use(express.json());
app.use('/users', usersRouter);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use(errorPattern);

module.exports = app;
