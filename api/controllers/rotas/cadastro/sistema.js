const db = require('../../../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {eAdmin} = require('../../../midlleware/auth');

router.get('/cadastro_acesso', async (req, res)=>{
    const password = await bcrypt.hash("123456", 8);
    console.log(password);

    res.json({message:"sddfsddsdsds"});

    // dados recebidos: matricula / senha
    //var dados = req.body;
    
   // if(dados.matricula && dados.senha){
            //findOn para buscar somente um registro
       // const user = await db.user.findOne({
            //indicar colunas
           // attributes:['matricula','senha'],
            //qual registro quero retornar do banco de dados
        //    where:{
         //       matricula : dados.matricula,
         //       senha : dados.senha
          //  }

       // });
    //     if(user){
    //         res.status(200).json(data={
    //             matricula:user.matricula,
    //             message:"Usuario encontrado!",
    //             code:200
    //         })
    //     }else{
    //         res.status(400).json(data={
    //             message:"Conta nao encontrada, verifique dados de login",
    //             code:400
    //         })
    //     }
    // }else{
    //         res.status(401).json(data={
    //             message:"preencha todos os campos",
    //             code:401
    //         })
    // }
    
    

    
    
}) 

// exportação do modulo router
module.exports = router;