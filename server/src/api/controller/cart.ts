/* eslint-disable @typescript-eslint/no-misused-promises */
import { NextFunction, RequestHandler } from 'express';
import Cart from '../../db/models/carts';
import { ICart } from '../../types/cart';

const getCart: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { id: cartId } = req.params as { id: string };

    const cart = await Cart.findByPk(cartId);
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    res.json(cart);
  } catch (error) {
    next(error);
  }
};

const createCart: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const body = req.body as ICart;

    const cart = await Cart.create({
      sessionId: body.sessionId,
      userId: body.userId,
      addressId: body.addressId,
      email: body.email,
      status: body.status,
      userAgent: body.userAgent,
      ipAddress: body.ipAddress,
    });

    res.json(cart);
  } catch (error) {
    next(error);
  }
};

const updateCart: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { id: cartId } = req.params as { id: string };
    const body = req.body as ICart;
    const cart = await Cart.update(
      {
        email: body.email,
        userId: body.userId,
      },
      { where: { cartId } }
    );

    res.json(cart);
  } catch (error) {
    next(error);
  }
};

export default { getCart, createCart, updateCart };
