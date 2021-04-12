const router = require('express').Router();
const TabelaAgendamento = require('../../agendamentos/TabelaAgendamento');
const Agendamento = require('../../agendamentos/Agendamento');

router.post('/agendamentos', async(req, res) => {
  const infoAgendamentos = req.body;
  const agendamento = new Agendamento(infoAgendamentos);

  await agendamento.criar();

  res.send(JSON.stringify(agendamento));
});

router.get('/agendamentos', async(req, res) => {
  const results = await TabelaAgendamento.listar();

  res.send(JSON.stringify(results));
});

router.get('/agendamentos/:id', async(req, res) => {
  try {
      const { id } = req.params;
      const agendamento = new Agendamento({ id:id });

      await agendamento.buscar();

      resp.send(JSON.stringify(agendamento));
  } catch(error) {
      res.send(JSON.stringify(
        {
          mensage: error.message
        }
      ));
  }
});

router.delete('/agendamentos/:id', async(req, res) => {
  try {
      const { id } = req.params;
      const agendamento = new Agendamento({ id:id });

      await agendamento.remover();

      resp.status(204).send('Registro removido')
  } catch(error) {
      res.send(JSON.stringify(
        {
          mensage: error.message
        }
      ));
  }
});

module.exports = router;