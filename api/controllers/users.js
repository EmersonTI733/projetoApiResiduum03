  const db = require('../../db/models/index');

const express = require('express');
const router = express.Router(); // quero gerenciar somente as rotas


//rota de login para usuario empresa
router.post('/login', async (req, res)=>{
    // dados recebidos: matricula / senha
    var dados = req.body;
    
    if(dados.matricula && dados.senha){
            //findOn para buscar somente um registro
        const user = await db.user.findOne({
            //indicar colunas
            attributes:['matricula','senha'],
            //qual registro quero retornar do banco de dados
            where:{
                matricula : dados.matricula,
                senha : dados.senha
            }

        });
        if(user){
            res.status(200).json(data={
                message:"Usuario encontrado!",
                code:200
            })
        }else{
            res.status(400).json({
                message:"Conta nao encontrada, verifique dados de login",
                code:400
            })
        }
    }else{
            res.status(401).json({
                message:"preencha todos os campos",
                code:401
            })
    }
    
    

    
    
}) 

//rota de cadastro
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


//rota de listar os clientes
router.get('/listar_empresas',async (req, res)=>{
    //nome_fantasia, cnpj, cep, bairro, rua, numero, razao_social, ceo, email, telefone
    const users = await db.dados_empresas.findAll(
        {
            attributes:['id','nome_fantasia', 'cnpj', 'cep', 'bairro', 'rua', 'numero', 'razao_social', 'ceo', 'email', 'telefone'],
            order:[['nome_fantasia','DESC']]
        }
       
    );
    if (users){
        res.status(200).json(
            data={
                clientes_empresas : users,
                code: 200
            }
        )
    }else{
        res.status(400).json(
            data={
                message:'A lista esta vazio'
            }
        )
    }
})
router.get('/listar_condominios',async (req, res)=>{
    // dados recebidos: nome_condominio, cnpj, cep, bairro, rua, numero, email, telefone, sindico
    const users = await db.dados_condominios.findAll(
        {
            attributes:['id','nome_condominio', 'cnpj', 'cep', 'bairro', 'rua', 'numero', 'email', 'telefone', 'sindico'],
            order:[['nome_condominio','DESC']]
        }
       
    );
    if (users){
        res.status(200).json(
            data={
                condominios_cadastrados : users,
                code: 200
            }
        )
    }else{
        res.status(400).json(
            data={
                message:'A lista esta vazio'
            }
        )
    }
})
router.get('/listar_residencias',async (req, res)=>{
    //dados recebidos: nome_titular, cpf, cep, bairro, rua, numero, email, telefone
    const users = await db.dados_residencias.findAll(
        {
            attributes:['id','nome_titular', 'cpf', 'cep', 'bairro', 'rua', 'numero', 'email', 'telefone'],
            order:[['nome_titular','DESC']]
        }
       
    );
    if (users){
        res.status(200).json(
            data={
                residencias_cadastradas : users,
                code: 200
            }
        )
    }else{
        res.status(400).json(
            data={
                message:'A lista esta vazio'
            }
        )
    }
})



//rota de edicao
router.put('/editar_residencia', async (req, res)=>{
    // dados recebidos
    // dados recebidos: nome_titular, cpf, cep, bairro, rua, numero, email, telefone
    var dados = req.body;
    if(dados){
        const update = await db.dados_residencias.findOne({ id: dados.id });//trazer o item a ser editado
        //novo valor
        if(dados.nome_titular){
            update.nome_titular = dados.nome_titular;
        }
        if(dados.cpf){
            update.cpf = dados.cpf;
        }
        if(dados.cep){
            update.cep = dados.cep;
        }
        if(dados.bairro){
            update.bairro = dados.bairro;
        }
        if(dados.rua){
            update.rua = dados.rua;
        }
        if(dados.numero){
            update.numero = dados.numero;
        }
        if(dados.email){
            update.email = dados.email;
        }
        if(dados.telefone){
            update.telefone = dados.telefone;
        }

        await update.save({ fields: [
            'nome_titular', 'cpf', 'cep', 'bairro', 'rua', 'numero', 'email', 'telefone'
        ] });

        await update.reload();//salvar novo dado

        res.json(
            {
                message:"dados foram salvos"
            }
        )
    }else{
        res.json(
            {
                message:"nada pra salvar"
            }
        )
    }
    

       
})
router.put('/editar_condominio', async (req, res)=>{
    // dados recebidos
    // dados recebidos: nome_condominio, cnpj, cep, bairro, rua, numero, email, telefone, sindico
    var dados = req.body;
    if(dados){
        const update = await db.dados_condominios.findOne({ id: dados.id });//trazer o item a ser editado
        //novo valor
        if(dados.nome_condominio){
            update.nome_condominio = dados.nome_condominio;
        }
        if(dados.cnpj){
            update.cnpj = dados.cnpj;
        }
        if(dados.cep){
            update.cep = dados.cep;
        }
        if(dados.bairro){
            update.bairro = dados.bairro;
        }
        if(dados.rua){
            update.rua = dados.rua;
        }
        if(dados.numero){
            update.numero = dados.numero;
        }
        if(dados.email){
            update.email = dados.email;
        }
        if(dados.telefone){
            update.telefone = dados.telefone;
        }
        if(dados.sindico){
            update.sindico = dados.sindico;
        }

        await update.save({ fields: [
            'nome_condominio', 'cnpj', 'cep', 'bairro', 'rua', 'numero', 'email', 'telefone', 'sindico'
        ] });

        await update.reload();//salvar novo dado

        res.json(
            {
                message:"dados foram salvos"
            }
        )
    }else{
        res.json(
            {
                message:"nada pra salvar"
            }
        )
    }
    

       
})
router.put('/editar_empresa', async (req, res)=>{
    // dados recebidos
    // dados recebidos: nome_fantasia, cnpj, cep, bairro, rua, numero, razao_social, ceo, email, telefone
    var dados = req.body;
    if(dados){
        const update = await db.dados_empresas.findOne({ id: dados.id });//trazer o item a ser editado
        //novo valor
        if(dados.nome_fantasia){
            update.nome_fantasia = dados.nome_fantasia;
        }
        if(dados.cnpj){
            update.cnpj = dados.cnpj;
        }
        if(dados.cep){
            update.cep = dados.cep;
        }
        if(dados.bairro){
            update.bairro = dados.bairro;
        }
        if(dados.rua){
            update.rua = dados.rua;
        }
        if(dados.numero){
            update.numero = dados.numero;
        }
        if(dados.email){
            update.email = dados.email;
        }
        if(dados.razao_social){
            update.razao_social = dados.razao_social;
        }
        if(dados.ceo){
            update.ceo = dados.ceo;
        }
        if(dados.telefone){
            update.telefone = dados.telefone;
        }

        await update.save({ fields: [
            'nome_fantasia', 'cnpj', 'cep', 'bairro', 'rua', 'numero', 'razao_social', 'ceo', 'email', 'telefone'
        ] });

        await update.reload();//salvar novo dado

        res.json(
            {
                message:"dados foram salvos"
            }
        )
    }else{
        res.json(
            {
                message:"nada pra salvar"
            }
        )
    }
    

       
})


//rota exclusao
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
router.delete('/deletar_condominio', async (req, res)=>{
    var id_usuario_excluir = req.body.id;

    const users = await db.dados_condominios.destroy(
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



