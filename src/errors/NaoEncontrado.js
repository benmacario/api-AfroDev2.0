class NaoEncontrado extends Error {
  constructor(classe){
      super(`${classe} Não encontrado`);
      this.name = 'NaoEncontrado';
      this.idError = 4;
  }
};

module.exports = NaoEncontrado; 