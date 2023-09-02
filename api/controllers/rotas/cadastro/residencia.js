const db = require('../../../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas

router.post('/cadastro_residencia', async (req, res)=>{
    // dados recebidos: nome_titular, cpf, cep, bairro, rua, numero, email, telefone
    var dados = req.body;

    if (dados.nome_titular && dados.cpf && dados.cep && dados.bairro && dados.rua && dados.numero && dados.email && dados.telefone){
        //verificacao de cadastro se existe
            const user = await db.dados_residencias.findOne({
                attributes:['cpf'],
                where:{
                    cpf : dados.cpf
                }
        
            });
            //nao existe cadastro, entao cria
            if(!user){
                await db.dados_residencias.create(dados).then((dadosUsuario)=>{
                    res.status(200).json(
                        data={
                            message:'Dados cadastrados com sucesso',
                            usuario:{
                                cnpj : dadosUsuario.cpf,    
                                usuario : dadosUsuario.nome_titular
                            },
                            code: 200

                        }
                        
                    )
                }).catch(()=>{
                    res.status(400).json(
                        data={
                            message:'erro, usuario nao cadastrado'
                        }
                    )
                })
                
                
            }else{
                res.status(401).json(
                    data={
                        message:'cpf ja existe cadastro'
                    }
                )
            }
    }else{
        res.status(201).json(data={
            message:'Preencha todos os campos'
        })
    }
    
    
}) 

// exportação do modulo router
module.exports = router;