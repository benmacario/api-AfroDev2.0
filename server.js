require('dotenv').config();

const express = require('./src/config/express');
const config = require('config');

const app = express();
const port = config.get('api.port');

app.listen(port, () => {
  console.info(`Servidor Rodando na porta ${port}`);
});