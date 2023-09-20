const { DolphControllerHandler } = require("@dolphjs/main/classes");
const { TryCatchAsyncFn, SuccessResponse } = require("@dolphjs/main/common");
const { AppService, greeting } = require("./app.service");

// OOP approach
class AppController extends DolphControllerHandler {
  service;
  constructor() {
    super();
    this.service = new AppService();
  }

  oopGreeting = TryCatchAsyncFn(async (req, res) => {
    const { name, email } = req.body;
    const response = await this.service.greeting({ name, email });
    SuccessResponse({ res, body: response });
  });
}

// POP approach
const popGreeting = TryCatchAsyncFn(async (req, res) => {
  const { name, email } = req.body;
  const response = await greeting({ name, email });
  SuccessResponse({ res, body: response });
});

module.exports = { AppController, popGreeting };
