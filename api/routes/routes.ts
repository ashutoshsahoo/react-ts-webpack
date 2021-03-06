import * as express from "express";
import { Logger } from "../logger/logger";
import User, { IUser } from "./user";
import Auth from "./auth";

class Routes {
  public express: express.Application;
  public logger: Logger;

  // array to hold users
  public users: IUser[];

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.logger = new Logger();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    // user route
    this.express.use("/users", User);
    // auth route
    this.express.use("/auth", Auth);
  }
}

export default new Routes().express;
