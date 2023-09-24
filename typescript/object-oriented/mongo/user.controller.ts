import { DolphControllerHandler } from "@dolphjs/dolph/classes";
import {
  Dolph,
  SuccessResponse,
  TryCatchAsyncDec,
} from "@dolphjs/dolph/common";
import { UserService } from "./user.service";
import { InjectServiceHandler } from "@dolphjs/dolph/decorators";
import { Request, Response } from "express";

// Should be used when you have numerous services
@InjectServiceHandler([
  { serviceHandler: UserService, serviceName: "userService" },
])
class ControllerServices {
  userService!: UserService;
}

const controllerService = new ControllerServices();
class UserController extends DolphControllerHandler<Dolph> {
  constructor() {
    super();
  }

  @TryCatchAsyncDec
  public async createUser(req: Request, res: Response) {
    const result = await controllerService.userService.createNewUser(req.body);
    SuccessResponse({ res, body: result });
  }
}

export { UserController };
