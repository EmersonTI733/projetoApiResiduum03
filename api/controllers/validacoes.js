const db = require('../../db/models/index');

class Valida {
    constructor(){

    }

    async busca(){
       
       
        const user = await db.user.findOne({
            attributes:['matricula']
        
        });
        
        //console.log(user);

    }
}

module.exports = Valida;




