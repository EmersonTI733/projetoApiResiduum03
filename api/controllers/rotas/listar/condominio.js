const db = require('../../../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {eAdmin} = require('../../../midlleware/auth');

router.get('/listar_condominios', eAdmin, async (req, res)=>{
    // dados recebidos: nome_condominio, cnpj, cep, bairro, rua, numero, email, telefone, sindico
    const users = await db.dados_condominios.findAll(
        {
            attributes:['id','nome_condominio', 'cnpj', 'cep', 'bairro', 'rua', 'numero', 'email', 'telefone', 'sindico'],
            order:[['nome_condominio','DESC']]
        }
       
    );
    if (users){
        res.status(200).json(
            data={
                condominios_cadastrados : users,
                code: 200,
                id: req.userId
            }
        )
    }else{
        res.status(400).json(
            data={
                message:'A lista esta vazio'
            }
        )
    }
})

// exportação do modulo router
module.exports = router;