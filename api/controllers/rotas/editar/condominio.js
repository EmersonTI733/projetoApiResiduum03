const db = require('../../../../db/models/index');

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

// exportação do modulo router
module.exports = router;