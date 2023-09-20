const { DolphRouteHandler } = require("@dolphjs/dolph/classes");
const { AppController, popGreeting } = require("./app.controller");
const { Router } = require("@dolphjs/core");

// OOP approach
class AppRouter extends DolphRouteHandler {
  constructor() {
    super();
    this.initRoutes();
  }

  path = "/";

  controller = new AppController();

  initRoutes() {
    this.router.post(this.path, this.controller.oopGreeting);
  }
}

// POP approach
const router = Router();
router.post("/pop", popGreeting);
const appRouter = {
  path: "/",
  router: router,
};

module.exports = { appRouter, AppRouter };
