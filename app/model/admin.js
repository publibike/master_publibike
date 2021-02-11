const bcrypt = require('bcrypt');

class Admin {

    async create (data){
        data.password = await this.constructor.encrypt(data.password);

        return data;
    }

    static async encrypt(password){

        const saltRounds = 10;
        const hashedPwd = await bcrypt.hash(password,saltRounds);

        return hashedPwd;

    }
    
    async validateAdmin(data, password){
        if(data){
            const passwordRight = await bcrypt.compare(password,data.password)
            const result = (passwordRight)? data:false
            return result
        }
        return false
    }
}
module.exports = Admin