const express = require('./src/config/express');
const config = require('config');
const app = express();

app.listen(config.get('api.port'), () => {
  console.log("Servidor Rodando");
});