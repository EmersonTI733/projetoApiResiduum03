

INICIAR E CRIANCAO DO PROJETO
# npm init

instalar o sequelize
# npm i sequelize ou 
# npm install --save sequelize

instalação do drive para o banco de dados mysql
# npm install --save mysql2

sequelize CLI
# npm install --save-dev sequelize-cli

configuração cli
Para criar um projeto vazio, você precisará executar o comandoinit
# npx sequelize-cli init

CRIAR DATABASE NO WORKBANCH
### CREATE DATABASE residuum03 CHARACTER SET utf8mb4  COLLATE utf8mb4_unicode_ci;
se nao funcionar crie diretamente no ambiente do banco

TRABALHANDO COM VARIAVEIS DE AMBIENTE
# npm install dotenv --save

# CRIAR A MIGRATION user
    npx sequelize-cli model:generate --name user --attributes matricula:integer,senha:string
# CRIAR A MIGRATION Empresa
    npx sequelize-cli model:generate --name dados_empresas --attributes nome_fantasia:string,cnpj:integer,cep:string,bairro:string,rua:string,numero:string,razao_social:string,ceo:string,email:string,telefone:string
# CRIAR A MIGRATION condominio
    npx sequelize-cli model:generate --name dados_condominios --attributes nome_condominio:string,cnpj:integer,cep:string,bairro:string,rua:string,numero:string,email:string,telefone:string,sindico:string
# CRIAR A MIGRATION residencia
    npx sequelize-cli model:generate --name dados_residencias --attributes nome_titular:string,cpf:integer,cep:string,bairro:string,rua:string,numero:string,email:string,telefone:string
  
EXECUTAR A MIGRATION
# npx sequelize-cli db:migrate

DEPENDENCIA DO EXPRESS PARA O SERVIDOR
# npm i express
# tabela user
 dados recebidos: matricula, senha

# nome das tabelas  dados_empresas, dados_condominios, dados_residencias
    dados nas referidas tabelas estao relacionados aos clientes da empresa
# dados_empresas
    dados recebidos: nome_fantasia, cnpj, cep, bairro, rua, numero, razao_social, ceo, email, telefone
# dados_condominios
    dados recebidos: nome_condominio, cnpj, cep, bairro, rua, numero, email, telefone, sindico
# dados_residencias
    dados recebidos: nome_titular, cpf, cep, bairro, rua, numero, email, telefone   


    npm i --save bcryptjs para criptografias