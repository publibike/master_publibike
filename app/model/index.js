'use strict'

/**En este modulo se administran
 * los diferentes modelos de la
 * base de datos que se van a registrar
 */
const admin = require('./admin');
const user = require('./user');
const company = require('./company');

module.exports = {
    admin: new admin(),
    user: new user(),
    company: new company()
}