const db = require('../../../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas

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

// exportação do modulo router
module.exports = router;