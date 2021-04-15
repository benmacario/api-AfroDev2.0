const { listar, buscarPorPK, remover } = require('../agendamentos/TabelaAgendamento');
const modelUsuarios = require('./modelTabelaUsuario');

module.exports = {
  async listar() {
    try {
      return await modelUsuarios.findAll({
        raw: true,
      });
    } catch (error) {
      throw error
    }
  },

  async adicionar(usuario) {
    try {
      return await modelUsuarios.create(usuario);
    } catch (error) {
      throw error
    }
  },

  async buscarPorPK(id) {
    try {
      return await modelUsuarios.findByPk(id);
    } catch (error) {
      throw error
    }
  },

  async buscarPorEmail(email) {
    try {
      return await modelUsuarios.findOne({
        where: {
          email: email
        }
      });
    } catch (error) {
      throw error
    }
  },

  async atualizar(id) {
    try {
      return await modelUsuarios.update(
        dados,
        {
          where: {
            id: id
          }
        }
      );
    } catch (error) {
      throw error
    }
  },

  async remover(id) {
    try {
      return await modelUsuarios.destroy(
        {
          where: {
            id: id
          }
        }
      );
    } catch (error) {
      throw error
    }
  }
}