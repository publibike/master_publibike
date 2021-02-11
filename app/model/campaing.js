const bcrypt = require('bcrypt');

class Campaing {

    async create (data,filename,host){
        if(filename){
            data.imagen = `${host}/assets/uploads/${filename}`;
        }
        data.cupos= Number.parseInt(data.cupos)
        data.pago_km = Number.parseInt(data.pago_km)
        data.presupuesto = Number.parseInt(data.presupuesto)
        // data.fecha_inicio = Date.parse(data.fecha_inicio)
        // data.fecha_final = Date.parse(data.fecha_final)
        data.km_total=0;
        data.cal_total=0;
        data.co2_total=0;
        data.tiempo_total=0;
        data.usuarios= []; 
        
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
module.exports = Campaing