"use strict";

const marca = require("./index");

module.exports.register = async server => {
    await marca.register(server);
};