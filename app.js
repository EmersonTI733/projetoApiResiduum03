const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');



const cors = require('cors');

app.use(express.json()); //aceitar arquivo json

const routers = require('./api/controllers/rotas');



app.use(cors());


app.use('/', routers);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(8080, ()=>{
    console.log('Servidor funcionando corretamente na url: localhost:8080');
})


