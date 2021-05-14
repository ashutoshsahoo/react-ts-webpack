import * as express from "express";
import { Logger } from "../logger/logger";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

class User {
  public express: express.Application;
  public logger: Logger;

  // array to hold users
  public users: IUser[];

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.users = [];
    this.logger = new Logger();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    // request to get all the users
    this.express.get("/users", (req, res, next) => {
      this.logger.info("url:" + req.url);
      res.json(this.users);
    });

    // request to get all the users by first Name
    this.express.get("/users/:fname", (req, res, next) => {
      this.logger.info("url:::::" + req.url);
      const user = this.users.filter((u) => req.params.fname === u.firstName);
      res.json(user);
    });

    // request to post the user
    // req.body has object of type {firstName:"fnam1",lastName:"lnam1",email:"email@xyz.com"}
    this.express.post("/user", (req, res, next) => {
      this.logger.info("url:::::::" + req.url);
      this.users.push(req.body.user);
      res.json(this.users);
    });
  }
}

export default new User().express;
