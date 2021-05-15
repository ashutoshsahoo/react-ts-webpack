import * as express from "express";
import { Logger } from "../logger/logger";

class Auth {
  public express: express.Application;
  public logger: Logger;

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
    this.express.post("/login", (req, res, next) => {
      this.logger.info("url:::::::" + req.url);
      res.json({ token: "test123" });
    });
  }
}

export default new Auth().express;
