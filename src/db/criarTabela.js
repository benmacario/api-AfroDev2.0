const ModelTabelaAgendamento = require('../agendamentos/ModelTabelaAgendamento');

ModelTabelaAgendamento.sync()
  .then(() => {
      console.log('Success: Tabela criada');;
  }).catch(
      console.log("Error: Tabela nao criada")
  );