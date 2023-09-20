const { TryCatchAsyncFn, SuccessResponse } = require("@dolphjs/dolph/common");
const { createUserService } = require("./app.service");

const createUser = TryCatchAsyncFn(async (req, res) => {
  const result = await createUserService(req.body);
  SuccessResponse({ res, body: result });
});

module.exports = { createUser };
