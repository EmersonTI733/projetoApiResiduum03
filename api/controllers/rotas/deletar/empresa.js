const db = require('../../../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas

router.delete('/deletar_empresa', async (req, res)=>{
    var id_usuario_excluir = req.body.id;

    const users = await db.dados_empresas.destroy(
        {
            where:{
                id: id_usuario_excluir
            }
        }
        );

        if (users){
            res.json(data={
                message:'cliente excluido com sucesso'
            })
        }else{
            res.json(data={
                message:'ERROR, cliente nao foi excluido, porque nao existe no banco!'
            })
        }

})

// exportação do modulo router
module.exports = router;