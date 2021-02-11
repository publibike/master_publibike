"use strict";

const marca = require("./marca/index");

module.exports.register = async server => {
    await marca.register(server);
};