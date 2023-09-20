const { DolphFactory } = require("@dolphjs/dolph");
const { UserRouter } = require("./app.routes");

const dolph = new DolphFactory([new UserRouter()]);
dolph.start();
