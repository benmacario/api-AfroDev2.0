const TabelaUsuario = require('./TabelaUsuario');
const CampoInvalido = require('../errors/CampoInvalido');
const CampoQtdMinima = require('../errors/CampoQtdMinima');
const CampoQtdMaxima = require('../errors/CampoQtdMaxima');
const NaoEncontrado = require('../errors/NaoEncontrado');

class Usuario {
  constructor({id, nome, email, senha, data_criacao, data_atualizacao}) {
    this.id = id,
    this.nome = nome,
    this.email = email,
    this.senha = senha,
    this.data_criacao = data_criacao,
    this.data_atualizacao = data_atualizacao,
    this.senhaHash = '';
  };

  async criar() {
    const result = await TabelaUsuario.adicionar({
      nome: this.nome,
      email: this.email,
      senha: this.senhaHash
    });

    this.id = result.id;
    this.data_criacao = result.data_criacao;
    this.data_atualizacao = result.data_atualizacao;
  };

  async buscarPorId() {
    const result = await TabelaUsuario.buscarPorPK(this.id);

    this.nome = result.nome;
    this.email = result.email;
    this.senha = result.senha;
    this.data_criacao = result.data_criacao;
    this.data_atualizacao = result.data_atualizacao;
  };

  async buscarPorEmail() {
    const result = await TabelaUsuario.buscarPorEmail(this.email);

    this.id = result.id;
    this.nome = result.nome;
    this.senha = result.senha;
    this.data_criacao = result.data_criacao;
    this.data_atualizacao = result.data_atualizacao;
  };

  async atualizar() {
    const camposAtualizar = ['nome', 'email', 'senha'];
    const dadosAtualizar = [];
    const result = await TabelaUsuario.buscarPorPK(this.id);

    if(!result) {
      throw new NaoEncontrado('Usuário');
    }

    camposAtualizar.forEach(campo => {
      const valor = this[campo];

      if(typeof valor === 'string' && valor.length > 0) {
        dadosAtualizar[campo] = valor;
      };
    });

    await TabelaUsuario.atualizar(this.id, dadosAtualizar);
  };

  async remover() {
    await TabelaUsuario.remover(this.id);
  };

  validar() {
    const camposObrigatorios = ['nome', 'email', 'senha'];

    camposObrigatorios.forEach(campo => {
      const valor = this[campo];

      if(typeof valor !== 'string' || valor.length === 0) {
        throw new CampoInvalido(campo);
      };

      if(valor.length < 8 && campo === 'senha') {
        throw new CampoQtdMinima(campo);
      }

      if(valor.length > 64 && campo === 'senha') {
        throw new CampoQtdMaxima(campo);
      }
    })
  }
}

module.exports = Usuario;