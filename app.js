const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json()); //aceitar arquivo json
const users = require('./api/controllers/users');

app.use(cors());

app.use('/', users);


app.listen(8080, ()=>{
    console.log('Servidor funcionando corretamente na url: localhost:8080');
})


