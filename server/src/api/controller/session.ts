/* eslint-disable @typescript-eslint/no-misused-promises */
import { NextFunction, RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import Session from '../../db/models/sessions';
import User from '../../db/models/users';
import { ILogin, NewSession } from '../../types/session';
import { IUser } from '../../types/user';

const getSession: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { id: sessionId } = req.params as { id: string };
    const session = await Session.findByPk(sessionId);

    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    res.json(session);
  } catch (error) {
    next(error);
  }
};

const createSession: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const body = req.body as NewSession;
    const session = await Session.create({
      userId: body.userId,
      isValid: body.isValid,
      token: body.token,
    });

    res.json(session);
  } catch (error) {
    next(error);
  }
};

const updateSession: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { id: sessionId } = req.params as { id: string };
    const body = req.body as NewSession;

    const session = await Session.update(
      {
        userId: body.userId,
        isValid: body.isValid,
        token: body.token,
      },
      { where: { sessionId } }
    );

    res.json(session);
  } catch (error) {
    next(error);
  }
};

const deleteSession: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { id: sessionId } = req.params as { id: string };
    await Session.destroy({ where: { sessionId } });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const login: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    console.log('hi');
    const body = req.body as ILogin;

    const user = await User.findOne({ where: { username: body.username } });
    if (!user) {
      return res.status(403).json({ error: 'Invalid username or password' });
    }
    console.log(user);
    console.log('\n');
    console.log(user.toJSON());
    console.log('\n');

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const userJSON = user.toJSON() as IUser;
    const correctPassword = await bcrypt.compare(
      body.password,
      userJSON.password
    );

    if (!correctPassword) {
      return res.status(403).json({ error: 'Invalid username or password' });
    }

    req.session.isAuth = true;
    req.session.data = { username: userJSON.name };
    res.json({ message: 'Login successful' });
  } catch (error) {
    next(error);
  }
};

const logout: RequestHandler = (req, res, next: NextFunction) => {
  try {
    req.session.destroy((err) => {
      if (err) next(err);

      res.status(204).end();
    });
  } catch (error) {
    next(error);
  }
};

// const refresh: RequestHandler = async (req, res, next: NextFunction) => {
//   try {
//   } catch (error) {
//     next(error);
//   }
// };

export default {
  getSession,
  createSession,
  updateSession,
  deleteSession,

  login,
  logout,
  // refresh,
};
