const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const acesso = require('./acesso');
const cadastro = require('./cadastro');
const deletar = require('./deletar');
const editar = require('./editar');
const listar = require('./listar');



const cors = require('cors');

app.use(express.json()); //aceitar arquivo json

app.use(cors());

app.use('/', acesso);
app.use('/', cadastro);
app.use('/', deletar);
app.use('/', editar);
app.use('/', listar);


//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(8080, ()=>{
    console.log('Servidor funcionando corretamente na url: localhost:8080');
})


