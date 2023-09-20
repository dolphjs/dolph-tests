const { DolphFactory } = require("@dolphjs/dolph");
const { AppRouter, appRouter } = require("./app.routes");

const dolph = new DolphFactory([new AppRouter(), appRouter]);
dolph.start();
