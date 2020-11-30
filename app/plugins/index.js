"use strict";

/**EN ESTA SECCIÓN SE ADMINISTRAN
 * LOS DIFERENTES PLUGINS A USAR
 * EN LA APLICACIÓN
 */
const mongoBienestar = require("./mongodbBienestar");
const inert = require ("./inert");
const vision = require("./vision");

module.exports.register = async server =>{
    //Se registra el plugin sql al servidor
    await mongoBienestar.register(server);
    await inert.register(server);
    await vision.register(server);
    // server.expose("client1")
}