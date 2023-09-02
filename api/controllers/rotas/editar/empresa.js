const db = require('../../../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas

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

// exportação do modulo router
module.exports = router;