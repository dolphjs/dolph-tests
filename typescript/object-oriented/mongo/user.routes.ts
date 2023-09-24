import { DolphRouteHandler } from "@dolphjs/dolph/classes";
import { Dolph } from "@dolphjs/dolph/common";
import { UserController } from "./user.controller";

class UserRouter extends DolphRouteHandler<Dolph> {
  constructor() {
    super();
    this.initRoutes();
  }

  public readonly path: string = "/";
  controller: UserController = new UserController();

  initRoutes(): void {
    this.router.post(`${this.path}/`, this.controller.createUser);
  }
}

export { UserRouter };
