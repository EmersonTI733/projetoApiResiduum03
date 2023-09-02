const db = require('../../../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas

router.delete('/deletar_residencia', async (req, res)=>{
    var id_usuario_excluir = req.body.id;

    const users = await db.dados_residencias.destroy(
        {
            where:{
                id: id_usuario_excluir
            }
        }
        );

        if (users){
            res.json({
                message:'cliente excluido com sucesso'
            })
        }else{
            res.status(400).json({
                message:'ERROR, cliente nao foi excluido, porque nao existe no banco!'
            })
        }

})

// exportação do modulo router
module.exports = router;