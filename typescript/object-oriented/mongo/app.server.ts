import { DolphFactory } from "@dolphjs/dolph";
import { UserRouter } from "./user.routes";

const dolph = new DolphFactory([new UserRouter()]);
dolph.start();
