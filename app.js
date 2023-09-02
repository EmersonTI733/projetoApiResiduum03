const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json()); //aceitar arquivo json

const rotaAcesso = require('./api/controllers/rotas/acesso/login');
const rota_cadastro_empresa = require('./api/controllers/rotas/cadastro/empresa');
const rota_cadastro_condominio = require('./api/controllers/rotas/cadastro/condominio');
const rota_cadastro_residencia = require('./api/controllers/rotas/cadastro/residencia');
const rota_deletar_empresa = require('./api/controllers/rotas/deletar/empresa');
const rota_deletar_condominio = require('./api/controllers/rotas/deletar/condominio');
const rota_deletar_residencia = require('./api/controllers/rotas/deletar/residencia');
const rota_editar_empresa = require('./api/controllers/rotas/editar/empresa');
const rota_editar_condominio = require('./api/controllers/rotas/editar/condominio');
const rota_editar_residencia = require('./api/controllers/rotas/editar/residencia');
const rota_listar_empresa = require('./api/controllers/rotas/listar/empresa');
const rota_listar_condominio = require('./api/controllers/rotas/listar/condominio');
const rota_listar_residencia = require('./api/controllers/rotas/listar/residencia');
const total_de_clientes = require('./api/controllers/rotas/total_de_clientes/total_Clientes');

app.use(cors());

app.use('/',rotaAcesso);
app.use('/',rota_cadastro_empresa);
app.use('/',rota_cadastro_condominio);
app.use('/',rota_cadastro_residencia);
app.use('/',rota_deletar_empresa);
app.use('/',rota_deletar_condominio);
app.use('/',rota_deletar_residencia);
app.use('/',rota_editar_empresa);
app.use('/',rota_editar_condominio);
app.use('/',rota_editar_residencia);
app.use('/',rota_listar_empresa);
app.use('/',rota_listar_condominio);
app.use('/',rota_listar_residencia);
app.use('/',total_de_clientes);



app.listen(8080, ()=>{
    console.log('Servidor funcionando corretamente na url: localhost:8080');
})


