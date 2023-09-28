'use strict';// normativar os codigos para evitar variaveis nao declaradas
// VARIAVEIS DE AMBIANTE
require('dotenv').config()
// CRIAR ARQUIVOS
const fs = require('fs');// PERMITE TRABALHAR COM O SISTEMA DE ARQUIVOS DO COMPUTADOR
const path = require('path');// PERMITE TRABALHAR COM CAMINHO DE ARQUIVOS E DIRETORIOS
const Sequelize = require('sequelize');// ORM PARA NODE.JS  mapeamento object-relacional
const process = require('process'); // PERMITE OBTER INFORMAÇÕES DO PROCESSO NA PAGINA ATUAL
const basename = path.basename(__filename);// PERMITE OBTER PARTE DO CAMINHO PARA O ARQUIVO
const env = process.env.NODE_ENV || 'development'; // acessando o modo em desenvolvimento com a variavel de ambiente
const config = require(__dirname + '/../config/config.js')[env];// INCLUIR O ARQUIVO DE CONFIGURAÇÃO
const db = {};// CRIA A CONSTANTE COM O OBJETO VAZIO

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// verificacao de conexao
try{
  console.log("conexao efetuada com Sucesso!");
}catch(error){
    console.error("a api nao de conectou com o banco de dado", error);
}


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
