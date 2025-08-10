const mongoose = require('mongoose');

const MensajeSchema = new mongoose.Schema({
  texto: { type: String, required: true }
});

module.exports = mongoose.model('Mensaje', MensajeSchema);