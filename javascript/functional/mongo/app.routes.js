const { Router } = require("@dolphjs/core");
const { createUser } = require("./app.controller");

const router = Router();
router.post("/user", createUser);

const appRoutes = {
  path: "/",
  router,
};

module.exports = { appRoutes };
