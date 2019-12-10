const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Definindo o model
const Postagem = new Schema({
  titulo: {
    type: String,
    require: true
  },
  conteudo: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const PostagemSchema = mongoose.model("postagens", Postagem);

module.exports = {
  persistir: function(noticia) {
    return PostagemSchema.create(noticia);
  },
  carregarTodas: function() {
    return PostagemSchema.find({});
  },
  buscar: function(titulo) {
    const term = titulo;
    return PostagemSchema.find({ titulo: new RegExp(term, 'i') });
  }
};
