const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//definindo o model
const Usuarios = new Schema({
  nome: {
    type: String,
    unique: true,
    require: true
  },

  email: {
    type: String,
    unique: true,
    require: true
  },

  senha: {
    type: String,
    require: true
  }
});

mongoose.model("usuarios", Usuarios);
