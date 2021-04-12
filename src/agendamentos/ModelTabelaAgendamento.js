const Sequelize = require('sequelize');
const instancia_db = require('../db/index');

const columns = {
  nome_cliente: {
    type: Sequelize.STRING,
    allowNull:false
  },
  nome_servico:{
      type: Sequelize.STRING,
      allowNull: false
  },
  status: {
      type: Sequelize.ENUM('agendado','cancelado'),
      allowNull: false
  },
  data_agendamento:{
      type:Sequelize.DATE,
      allowNull: false
  }
}

const sequelizeOptions = {
  freezeTableName: true,
  tableName: "agendamento",
  timestamps: true,
  createAt: 'data_criacao',
  updatedAt: 'data_atualizacao'
}

module.exports =  instancia_db.define('agendamento', columns, sequelizeOptions);