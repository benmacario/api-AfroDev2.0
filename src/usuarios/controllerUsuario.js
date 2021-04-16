const jwt = require('jsonwebtoken');
// const usuario = require('./Usuario');
// const bcrypt = require('bcrypt');

function criarToken(usuario) {
  const payload = {
    id: usuario.id
  };

  return jwt.sign(payload, process.env.JWT_KEY);
}

module.exports = {
  login: (req, res) => {
    const acesseToken = criarToken(req.user);

    res.set('Authorization', acesseToken);
    res.status(200).send();
  }
}