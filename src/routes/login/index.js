const router = require('express').Router();
const { passport } = require('../../usuarios/autenticacao');
const controllerUsuario = require('../../usuarios/controllerUsuario');

router.post('/login', passport.authenticate('local', { session: false }),
  controllerUsuario.login
);

module.exports = router;