const { initMySql } = require("@dolphjs/dolph/packages");

const sequelizeInstance = initMySql("dolph", "root", "password", "localhost");

module.exports = { sequelizeInstance };
