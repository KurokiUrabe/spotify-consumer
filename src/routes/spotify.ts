import StatusCodes from "http-status-codes";
import express, { Express } from "express";
import { IUser } from "../entities/User";

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

/**
 * Login spotify by redirect.
 *
 * @param req
 * @param res
 * @returns
 */
export const spotifyLogin = (req: express.Request, res: express.Response) => {
  var scopes = "user-read-private user-read-email";
  const my_client_id = "my_client_id";
  const redirect_uri = "redirect_uri";
  res.redirect(
    "https://accounts.spotify.com/authorize" +
      "?response_type=code" +
      "&client_id=" +
      my_client_id +
      (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" +
      encodeURIComponent(redirect_uri)
  );
};

export const showMyName = (req: express.Request, res: express.Response) => {
  const { user } = req;
  res.send(`Hello world ${user?.displayName}`);
};
