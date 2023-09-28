const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const acesso = require('./api/controllers/acesso');
const cadastro = require('./api/controllers/cadastro');
const deletar = require('./api/controllers/deletar');
const editar = require('./api/controllers/editar');
const listar = require('./api/controllers/listar');
const total_clientes = require('./api/controllers/total_Clientes');



const cors = require('cors');

app.use(express.json()); //aceitar arquivo json

app.use(cors());

app.use('/', acesso);
app.use('/', cadastro);
app.use('/', deletar);
app.use('/', editar);
app.use('/', listar);
app.use('/', total_clientes);


//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(8080, ()=>{
    console.log('Servidor funcionando corretamente na url: localhost:8080');
})


