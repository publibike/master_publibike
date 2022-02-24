const bcrypt = require('bcrypt');

class User {

    async create(data, dataEmpresa) {
        // data.password = await this.constructor.encrypt(data.password);
        data.empresa = {
            id: dataEmpresa._id,
            nombre: dataEmpresa.nombre
        }
        data.usuario = Number.parseInt(data.usuario);
        data.peso = Number.parseInt(data.peso);
        data.estatura = Number.parseInt(data.estatura);
        data.sede = "";
        data.riesgo_COVID = 0;
        data.recorridos = [];
        data.reconocimientos = [];
        data.km_total = 0;
        data.cal_total = 0;
        data.co2_total = 0;
        data.tiempo_total = 0;
        data.terminos = false;
        data.Nsmarphones = 0;
        data.Nplantulas = 0;
        data.NBresicladas = 0;
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
module.exports = User