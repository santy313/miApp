const express = require('express');
const router = express.Router();
const Mensaje = require('../models/Mensaje');

// Obtener mensaje
router.get('/', async (req, res) => {
  try {
    const mensaje = await Mensaje.findOne();
    res.json(mensaje);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear mensaje (una vez para insertar "Hola mundo!")
router.post('/', async (req, res) => {
  try {
    const nuevo = new Mensaje({ texto: req.body.texto });
    await nuevo.save();
    res.json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;