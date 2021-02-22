const bcrypt = require('bcrypt');

class Company {

    async create(data) {
        data.reconocimientos = [];
        data.usuarios=[];
        data.km=0;
        data.cal=0;
        data.co2=0;
        data.tiempo=0;
        data.datosHistoricos=[]
        return data;
    }

    
}
module.exports = Company