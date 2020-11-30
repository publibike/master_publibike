"use strict";

const bienestar = require("./bienestar/index");

module.exports.register = async server => {
    await bienestar.register(server);
};