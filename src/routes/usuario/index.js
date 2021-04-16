const router = require('express').Router();
const SerializadorUsuario = require('../../../Serializar').SerializarUsuario;
const TabelaUsuario = require('../../usuarios/TabelaUsuario');
const Usuario = require('../../usuarios/Usuario');

router.get('/usuarios', async(req, res) => {
  const result = await TabelaUsuario.listar();
  const serializador = new SerializadorUsuario(
    res.getHeader('content-type')
  );

  res.status(200).send(serializador.transformar(result));
});

router.get('/usuarios/:id', async(req, res) => {
  const { id } = req.params;
  const usuario = new Usuario({ id: id });

  await usuario.buscarPorId();

  const serializador = new SerializadorUsuario(
    res.getHeader('content-type')
  );
  

  res.status(200).send(serializador.transformar(usuario));
});

router.post('/usuarios', async(req, res, next) => {
  try {
    const infoUsuario = req.body;
    const usuario = new Usuario(infoUsuario);
  
    await usuario.criar();
  
    const serializador = new SerializadorUsuario(
      res.getHeader('content-type')
    );
  
    res.status(201).send(serializador.transformar(usuario));
  } catch(error) {
    next(error);
  }
});

router.put('/usuarios/:id/update', async(req, res, next) => {
  try {
    const { id } = req.params;
    const dadosDeModificacao = req.body;
    const dados = Object.assign({}, dadosDeModificacao, { id: id });
    const usuario = new Usuario(dados);

    await usuario.atualizar();

    const serializador = new SerializadorUsuario(
      res.getHeader('content-type')
    );
  
    res.status(204).send(serializador.transformar(usuario));
  } catch (error) {
    next(error);
  }
});

router.delete('/usuarios/:id/delete', async(req, res, next) => {
  try {
    const { id } = req.params;
    const usuario = new Usuario({ id:id });
  
    await usuario.remover();
  
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
