const db = require('../../../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas

router.get('/total_clientes', async (req, res)=>{
    const empresas = await db.dados_empresas.findAll();
    const condominios = await db.dados_condominios.findAll();
    const residencias = await db.dados_residencias.findAll();
    
  
    res.json(
        {
            empresas : empresas.length,
            condominios : condominios.length,
            residencias : residencias.length
        }
    )
})

// exportação do modulo router
module.exports = router;