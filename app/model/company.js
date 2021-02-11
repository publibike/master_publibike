const bcrypt = require('bcrypt');

class Company {

    async create (data){
        data.campanas=[];
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
module.exports = Company