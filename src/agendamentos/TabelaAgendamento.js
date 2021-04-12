const agendamento = require('./ModelTabelaAgendamento');

module.exports = {
  async listar() {
    return await agendamento.findAll({
      raw: true,
    });
  },
  async adicionar(infos) {
    return await agendamento.create(infos);
  },
  async buscar(id) {
    return await agendamento.findByPk(id);
  },
  async remover(id) {
    return await agendamento.destroy(
      {
        where: { id: id }
      }
    )
  }
}