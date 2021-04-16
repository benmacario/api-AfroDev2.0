class LoginInvalido extends Error {
  constructor() {
    super('e-email ou senha inválidos');
    this.name = 'LoginInvalido';
    this.idError = 7;
  };
};

module.exports = LoginInvalido;