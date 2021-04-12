const express = require('express');
const router = require('../routes/Agendamentos/index');

module.exports = () => {
  const app = express();

  app.use(express.json());
  app.use('/api', router);

  return app;
}