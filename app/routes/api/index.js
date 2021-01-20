"use strict";

const bienestar = require("./index");

module.exports.register = async server => {
    await bienestar.register(server);
};