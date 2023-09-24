import { DolphServiceHandler } from "@dolphjs/dolph/classes";
import { Dolph } from "@dolphjs/dolph/common";
import { InjectMongo } from "@dolphjs/dolph/decorators";
import { IUser, Users } from "./user.schema";
import { Model } from "mongoose";

@InjectMongo("userModel", Users)
class UserService extends DolphServiceHandler<Dolph> {
  userModel!: Model<IUser>;

  constructor() {
    super("user");
  }

  createNewUser = async (body: IUser): Promise<IUser> => {
    return this.userModel.create(body);
  };
}

export { UserService };
