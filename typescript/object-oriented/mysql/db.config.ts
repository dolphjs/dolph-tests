import { initMySql } from "@dolphjs/dolph/packages";

export const sequelizeInstance = initMySql(
  "dolph",
  "root",
  "password",
  "localhost"
);
