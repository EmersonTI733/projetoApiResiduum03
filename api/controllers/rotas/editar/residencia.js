const db = require('../../../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas

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