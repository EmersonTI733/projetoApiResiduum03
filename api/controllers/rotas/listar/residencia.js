const db = require('../../../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas

router.get('/listar_residencias',async (req, res)=>{
    //dados recebidos: nome_titular, cpf, cep, bairro, rua, numero, email, telefone
    const users = await db.dados_residencias.findAll(
        {
            attributes:['id','nome_titular', 'cpf', 'cep', 'bairro', 'rua', 'numero', 'email', 'telefone'],
            order:[['nome_titular','DESC']]
        }
       
    );
    if (users){
        res.status(200).json(
            data={
                residencias_cadastradas : users,
                code: 200
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