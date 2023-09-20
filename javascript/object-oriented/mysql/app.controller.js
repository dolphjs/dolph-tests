const { TryCatchAsyncFn, SuccessResponse } = require("@dolphjs/dolph/common");
const { UserService } = require("./app.service");
const { DolphControllerHandler } = require("@dolphjs/dolph/classes");

class UserController extends DolphControllerHandler {
  service;
  constructor() {
    super();
    this.service = new UserService();
  }

  createUser = TryCatchAsyncFn(async (req, res) => {
    const result = await this.service.createUser(req.body);
    SuccessResponse({ res, body: result });
  });
}

module.exports = { UserController };
