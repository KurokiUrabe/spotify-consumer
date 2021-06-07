import express from "express";

export const unknown = (req: express.Request, res: express.Response) =>
  res.send("Unknown Error");

export const redirectHome = (req: express.Request, res: express.Response) => {
  // Successful authentication, redirect home.
  console.log("log");

  res.redirect("/");
};
