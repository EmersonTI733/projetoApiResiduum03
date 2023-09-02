const db = require('../../../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas

router.get('/listar_empresas',async (req, res)=>{
    //nome_fantasia, cnpj, cep, bairro, rua, numero, razao_social, ceo, email, telefone
    const users = await db.dados_empresas.findAll(
        {
            attributes:['id','nome_fantasia', 'cnpj', 'cep', 'bairro', 'rua', 'numero', 'razao_social', 'ceo', 'email', 'telefone'],
            order:[['nome_fantasia','DESC']]
        }
       
    );
    if (users){
        res.status(200).json(
            data={
                clientes_empresas : users,
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