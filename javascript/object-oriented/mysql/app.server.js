const { DolphFactory } = require("@dolphjs/dolph");
const { UserRouter } = require("./app.routes");
const { autoInitMySql } = require("@dolphjs/dolph/packages");
const { sequelizeInstance } = require("./sql.config");

const dolph = new DolphFactory([new UserRouter()]);

autoInitMySql(sequelizeInstance);

dolph.start();
