const { DolphFactory } = require("@dolphjs/main/core");
const { AppRouter, appRouter } = require("./app.routes");

const dolph = new DolphFactory([new AppRouter(), appRouter]);
dolph.start();
