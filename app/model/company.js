const bcrypt = require('bcrypt');

class Company {

    async create(data) {
        // data.password = await this.constructor.encrypt(data.password);
        data.reconocimientos = [];
        data.usuarios=[];
        data.km=0;
        data.cal=0;
        data.co2=0;
        data.tiempo=0;
        return data;
    }

    static async encrypt(password) {

        const saltRounds = 10;
        const hashedPwd = await bcrypt.hash(password, saltRounds);

        return hashedPwd;

    }

    async validateUser(data, password) {
        if (data) {
            const passwordRight = await bcrypt.compare(password, data.password)
            const result = (passwordRight) ? data : false
            return result
        }
        return false
    }
}
module.exports = Company