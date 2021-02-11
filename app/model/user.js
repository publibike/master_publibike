const bcrypt = require('bcrypt');

class User {

    async create (data){
        data.password = await this.constructor.encrypt(data.password);
        data.riesgo_COVID=0;
        data.recorridos=[];
        data.km_total = 0;
        data.cal_total = 0;
        data.co2_total = 0;
        data.tiempo_total = 0;
        data.ganacia_total=0;
        data.campana_actual= {};
        data.campanas=[];
        data.contacto={};
        return data;
    }

    static async encrypt(password){

        const saltRounds = 10;
        const hashedPwd = await bcrypt.hash(password,saltRounds);

        return hashedPwd;

    }
    
    async validateUser(data, password){
        if(data){
            const passwordRight = await bcrypt.compare(password,data.password)
            const result = (passwordRight)? data:false
            return result
        }
        return false
    }
}
module.exports = User