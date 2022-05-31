import express, { Application, Request, Response } from 'express';
import session from 'express-session';
import SequelizeStore from 'connect-session-sequelize';
import AddressRouter from './api/router/address';
import CartRouter from './api/router/cart';
import PageRouter from './api/router/page';
import ProductRouter from './api/router/product';
import ProductCategoryRouter from './api/router/productCategory';
import SessionRouter from './api/router/session';
import UserRouter from './api/router/user';
import { SECRET_KEY } from './utils/config';
import { sequelize } from './db';
import { unknownEndpoint } from './middleware';
import errorHandler from './middleware/error';

declare module 'express-session' {
  interface SessionData {
    isAuth: boolean;
    data: {
      username?: string;
      userId?: string;
    };
  }
}

const app: Application = express();
const sequelizeStore = SequelizeStore(session.Store);

const myStore = new sequelizeStore({
  db: sequelize,
  tableName: 'my_session',

  checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
  expiration: 60 * 1000, // The maximum age (in milliseconds) of a valid session.
});

const sess = {
  secret: SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 1000 },

  store: myStore,
};

myStore.sync();

// if (app.get('env') === 'production') {
//   app.set('trust proxy', 1); // trust first proxy
//   sess.cookie.secure = true; // serve secure cookies
// }

app.use(session(sess));

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Sandesh Hyoju</h1>');
});

app.get('/ping', (_req: Request, res: Response) => {
  res.send('pong');
});

app.use('/api/v1/users', UserRouter);
app.use('/api/v1/address', AddressRouter);
app.use('/api/v1/carts', CartRouter);
app.use('/api/v1/product_categories', ProductCategoryRouter);
app.use('/api/v1/products', ProductRouter);
app.use('/api/v1/pages', PageRouter);
app.use('/api/v1', SessionRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
