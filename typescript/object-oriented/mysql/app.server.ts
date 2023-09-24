import { DolphFactory } from "@dolphjs/dolph";
import { UserRouter } from "./user.routes";
import { autoInitMySql } from "@dolphjs/dolph/packages";
import { sequelizeInstance } from "./db.config";

const dolph = new DolphFactory([new UserRouter()]);
autoInitMySql(sequelizeInstance);
dolph.start();
