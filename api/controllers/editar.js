const db = require('../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas

router.put('/editar_condominio', async (req, res)=>{
    // dados recebidos
    // dados recebidos: nome_condominio, cnpj, cep, bairro, rua, numero, email, telefone, sindico
    var dados = req.body;
    if(dados){
        const update = await db.dados_condominios.findOne(
            {
                where:{
                    id: dados.id
                }
            }
            );//trazer o item a ser editado
        //novo valor
        if(dados.nome_condominio){
            update.nome_condominio = dados.nome_condominio;
        }
        if(dados.cnpj){
            update.cnpj = dados.cnpj;
        }
        if(dados.cep){
            update.cep = dados.cep;
        }
        if(dados.bairro){
            update.bairro = dados.bairro;
        }
        if(dados.rua){
            update.rua = dados.rua;
        }
        if(dados.numero){
            update.numero = dados.numero;
        }
        if(dados.email){
            update.email = dados.email;
        }
        if(dados.telefone){
            update.telefone = dados.telefone;
        }
        if(dados.sindico){
            update.sindico = dados.sindico;
        }

        await update.save();

        res.json(
            data={
                message:"dados foram salvos"
            }
        )
    }else{
        res.json(
            data={
                message:"nada pra salvar"
            }
        )
    }
    

       
})

////////////////////////////////////////////////////

router.put('/editar_empresa', async (req, res)=>{
    // dados recebidos
    // dados recebidos: nome_fantasia, cnpj, cep, bairro, rua, numero, razao_social, ceo, email, telefone
    var dados = req.body;
    if(dados){
        const update = await db.dados_empresas.findOne({
            where:{
                id: dados.id
            }
        });//trazer o item a ser editado
        //novo valor
        if(dados.nome_fantasia){
            update.nome_fantasia = dados.nome_fantasia;
        }
        if(dados.cnpj){
            update.cnpj = dados.cnpj;
        }
        if(dados.cep){
            update.cep = dados.cep;
        }
        if(dados.bairro){
            update.bairro = dados.bairro;
        }
        if(dados.rua){
            update.rua = dados.rua;
        }
        if(dados.numero){
            update.numero = dados.numero;
        }
        if(dados.email){
            update.email = dados.email;
        }
        if(dados.razao_social){
            update.razao_social = dados.razao_social;
        }
        if(dados.ceo){
            update.ceo = dados.ceo;
        }
        if(dados.telefone){
            update.telefone = dados.telefone;
        }

        await update.save();

        res.json(
            data={
                message:"dados foram salvos"
            }
        )
    }else{
        res.json(
            data={
                message:"nada pra salvar"
            }
        )
    }
    

       
})

////////////////////////////////////////////////////

router.put('/editar_residencia', async (req, res)=>{
    // Dados recebidos: nome_titular, cpf, cep, bairro, rua, numero, email, telefone
    var dados = req.body;
    if (
      dados.nome_titular ||
      dados.cpf ||
      dados.cep ||
      dados.bairro ||
      dados.rua ||
      dados.numero ||
      dados.email ||
      dados.telefone
    ) {
      const update = await db.dados_residencias.findOne({
        where: { id: dados.id },
      });
  
      if (update) {
        // Atualize os valores apenas se eles estiverem presentes nos dados recebidos
        if (dados.nome_titular) {
          update.nome_titular = dados.nome_titular;
        }
        if (dados.cpf) {
          update.cpf = dados.cpf;
        }
        if (dados.cep) {
          update.cep = dados.cep;
        }
        if (dados.bairro) {
          update.bairro = dados.bairro;
        }
        if (dados.rua) {
          update.rua = dados.rua;
        }
        if (dados.numero) {
          update.numero = dados.numero;
        }
        if (dados.email) {
          update.email = dados.email;
        }
        if (dados.telefone) {
          update.telefone = dados.telefone;
        }
  
        // Salve as alterações no banco de dados
        await update.save();
  
        res.json({
          message: "Dados foram salvos",
        });
      } else {
        res.json({
          message: "ID não encontrado",
        });
      }
    } else {
      res.json({
        message: "Nada para salvar",
      });
    }
   
})

// exportação do modulo router
module.exports = router;