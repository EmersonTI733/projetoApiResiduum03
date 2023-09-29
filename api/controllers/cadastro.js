const db = require('../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {eAdmin} = require('../midlleware/auth');

router.post('/cadastro_condominio', async (req, res)=>{
    // dados recebidos: nome_condominio, cnpj, cep, bairro, rua, numero, email, telefone, sindico
    var dados = req.body;

    if (dados.nome_condominio && dados.cnpj && dados.cep && dados.bairro && dados.rua && dados.numero && dados.email && dados.telefone && dados.sindico){
        //verificacao de cadastro se existe
            const user = await db.dados_condominios.findOne({
                attributes:['cnpj'],
                where:{
                    cnpj : dados.cnpj
                }
           
            });
            //nao existe cadastro, entao cria
            if(!user){
                await db.dados_condominios.create(dados).then((dadosUsuario)=>{
                    res.status(200).json(
                        data={
                            message:'Dados cadastrados com sucesso',
                            usuario:{
                                cnpj : dadosUsuario.cnpj,    
                                usuario : dadosUsuario.nome_condominio
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
//////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////

router.post('/cadastro_acesso', async (req, res)=>{
    
    //  $2a$08$.qUQe5MsYWmUtDClghAp/.bp5LH2bXSxVUnQf/EFM8YH0fBCT5LwK
    const dados = req.body;
    //verificacao de cadastro se existe
    const user = await db.user.findOne({
        attributes:['matricula'],
        where:{
            matricula : dados.matricula
        }

    });

    if(!user){
        dados.senha = await bcrypt.hash(dados.senha, 8);
        await db.user.create(dados).then((dadosUsuario)=>{
            res.status(200).json(
                data={
                    message:'Dados cadastrados com sucesso',
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
        res.status(400).json(
            data={
                message:'erro, usuario nao cadastrado, verifique dados'
            }
        )
    }
    //   const password = await bcrypt.hash("123456", 8);
    //   console.log(password);
  
    //   res.json({message:"sddfsddsdsds"});
      
      
  }) 
module.exports = router;