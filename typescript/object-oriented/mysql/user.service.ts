import { DolphServiceHandler } from "@dolphjs/dolph/classes";
import { Dolph } from "@dolphjs/dolph/common";
import { InjectMySQL } from "@dolphjs/dolph/decorators";
import { User } from "./user.schema";
import { ModelStatic, Model } from "sequelize";

@InjectMySQL("userModel", User)
class UserService extends DolphServiceHandler<Dolph> {
  userModel!: ModelStatic<Model<any, any>>;

  constructor() {
    super("user");
  }

  createNewUser = async (body: {
    name: string;
    age: number;
  }): Promise<Model<any, any>> => {
    return this.userModel.create(body);
  };
}

export { UserService };
