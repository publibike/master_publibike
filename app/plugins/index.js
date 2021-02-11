"use strict";

/**EN ESTA SECCIÓN SE ADMINISTRAN
 * LOS DIFERENTES PLUGINS A USAR
 * EN LA APLICACIÓN
 */
const mongoMarca = require("./mongodbMarca");
const inert = require ("./inert");
const vision = require("./vision");


module.exports.register = async server => {
    //Se registra el plugin sql al servidor
    await mongoMarca.register(server);
    await inert.register(server);
    await vision.register(server);
    // server.expose("client1")
}