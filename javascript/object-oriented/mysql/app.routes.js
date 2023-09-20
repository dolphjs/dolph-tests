const { DolphRouteHandler } = require("@dolphjs/dolph/classes");
const { UserController } = require("./app.controller");

class UserRouter extends DolphRouteHandler {
  constructor() {
    super();
    this.initRoutes();
  }

  path = "/user";

  controller = new UserController();

  initRoutes() {
    this.router.post(`${this.path}/`, this.controller.createUser);
  }
}

module.exports = { UserRouter };
