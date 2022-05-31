/* eslint-disable @typescript-eslint/no-misused-promises */
import { NextFunction, RequestHandler } from 'express';

import bcrypt from 'bcrypt';

import { SALT } from '../../utils/config';
import User from '../../db/models/users';
import { NewUser } from '../../types/user';

/**
 * Create user
 */

const createUser: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { name, username, password } = req.body as NewUser;

    const passwordHash = await bcrypt.hash(password, Number(SALT));

    const user = await User.create({
      name,
      username,
      password: passwordHash,
    });

    res.json(user);
  } catch (error: unknown) {
    next(error);
  }
};

export default {
  createUser,
};
