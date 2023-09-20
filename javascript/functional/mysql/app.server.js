const { DolphFactory } = require("@dolphjs/dolph");
const { appRoutes } = require("./app.routes");
const { sequelizeInstance } = require("./sql.config");
const { autoInitMySql } = require("@dolphjs/dolph/packages");

const dolph = new DolphFactory([appRoutes]);

autoInitMySql(sequelizeInstance);

dolph.start();
