'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dados_condominios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dados_condominios.init({
    nome_condominio: DataTypes.STRING,
    cnpj: DataTypes.INTEGER,
    cep: DataTypes.STRING,
    bairro: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    sindico: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dados_condominios',
  });
  return dados_condominios;
};