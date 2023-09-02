const db = require('../../../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas

router.post('/cadastro_empresa', async (req, res)=>{
    // dados recebidos: nome_fantasia, cnpj, cep, bairro, rua, numero, razao_social, ceo, email, telefone
    var dados = req.body;

    if (dados.nome_fantasia && dados.cnpj && dados.cep && dados.bairro && dados.rua && dados.numero && dados.razao_social && dados.ceo && dados.email && dados.telefone){
        //verificacao de cadastro se existe
            const user = await db.dados_empresas.findOne({
                attributes:['cnpj'],
                where:{
                    cnpj : dados.cnpj
                }
        
            });
            //nao existe cadastro, entao cria
            if(!user){
                await db.dados_empresas.create(dados).then((dadosUsuario)=>{
                    res.status(200).json(
                        data={
                            message:'Dados cadastrados com sucesso',
                            usuario:{
                                cnpj : dadosUsuario.cnpj,    
                                usuario : dadosUsuario.nome_fantasia
                            },
                            code: 200

                        }
                        
                    )
                }).catch((error)=>{
                    console.log(error)
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