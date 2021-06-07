import StatusCodes from "http-status-codes";
import express, { Request, Response } from "express";

import UserDao from "@daos/User/UserDao.mock";
import { paramMissingError } from "@shared/constants";

const userDao = new UserDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

/**
 * Get all users.
 *
 * @param req
 * @param res
 * @returns
 */
export async function getAllUsers(req: express.Request, res: express.Response) {
  const users = await userDao.getAll();
  return res.status(OK).json({ users });
}

/**
 * Add one user.
 *
 * @param req
 * @param res
 * @returns
 */
export async function addOneUser(req: express.Request, res: express.Response) {
  const { user } = req.body;
  if (!user) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  await userDao.add(user);
  return res.status(CREATED).end();
}

/**
 * Update one user.
 *
 * @param req
 * @param res
 * @returns
 */
export async function updateOneUser(
  req: express.Request,
  res: express.Response
) {
  const { user } = req.body;
  if (!user) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  user.id = Number(user.id);
  await userDao.update(user);
  return res.status(OK).end();
}

/**
 * Delete one user.
 *
 * @param req
 * @param res
 * @returns
 */
export async function deleteOneUser(
  req: express.Request,
  res: express.Response
) {
  const { id } = req.params;
  await userDao.delete(Number(id));
  return res.status(OK).end();
}
