const db = require('../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res)=>{
    // dados recebidos: matricula / senha
    var dados = req.body;
    
    if(dados.matricula && dados.senha){
            //findOn para buscar somente um registro
        const user = await db.user.findOne({
            //indicar colunas
            attributes:['nome','matricula','senha'],
            where:{
                matricula : dados.matricula
            }

        });
        if(user){
            const valida = await bcrypt.compare(dados.senha, user.senha);
            if(valida){
                var token = jwt.sign({id:user.id}, "KJHJGHJFGHGJKHLKLKJLKJKHJHK",{
                    expiresIn: '1h'
                })

                res.status(200).json(data={
                    matricula:user.matricula,
                    nome:user.nome,
                    message:"Usuario encontrado!",
                    code:200,
                    token
                })
            }else{
                res.status(400).json(data={
                    message:"error de usuario"
                })
            }

        }else{
            res.status(400).json(data={
                message:"Conta nao encontrada, verifique dados de login",
                code:400
            })
        }
    }else{
            res.status(401).json(data={
                message:"preencha todos os campos",
                code:401
            })
    }
    
    

    
    
}) 

// exportação do modulo router
module.exports = router;