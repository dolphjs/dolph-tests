const { DolphFactory } = require("@dolphjs/dolph");
const { appRoutes } = require("./app.routes");

const dolph = new DolphFactory([appRoutes]);
dolph.start();
