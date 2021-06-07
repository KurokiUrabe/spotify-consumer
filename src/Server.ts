import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";

// auth
import cookieSession from "cookie-session";
import passport from "passport";
import express, { NextFunction, Request, Response } from "express";

import StatusCodes from "http-status-codes";
import "express-async-errors";

import BaseRouter from "./routes";
import logger from "@shared/Logger";

import "./passport";
import IUser from "@entities/User";

const app = express();
declare global {
  namespace Express {
    interface User extends IUser {}
  }
}

const { BAD_REQUEST } = StatusCodes;

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cookieSession({
    name: "spotify-auth-session",
    keys: ["key1", "key2"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Security
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

// Add APIs
app.use("/", BaseRouter);

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) => {
    logger.err(err, true);
    return res.status(BAD_REQUEST).json({
      error: err.message,
    });
  }
);

/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/

// const viewsDir = path.join(__dirname, "views");
// app.set("views", viewsDir);
// const staticDir = path.join(__dirname, "public");
// app.use(express.static(staticDir));
// app.get("*", (req: express.Request, res: express.Response) => {
//   res.sendFile("index.html", { root: viewsDir });
// });

// Export express instance
export default app;
