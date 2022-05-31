/* eslint-disable @typescript-eslint/no-misused-promises */
import { NextFunction, RequestHandler } from 'express';
import CartProduct from '../../db/models/cartProducts';
import { NewCartProduct } from '../../types/cartProduct';

const getCartProduct: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { id: cartProductId } = req.params as { id: string };

    const cartProduct = await CartProduct.findByPk(cartProductId);
    if (!cartProduct) {
      return res.status(404).json({ error: 'Cart product not found' });
    }

    res.json(cartProduct);
  } catch (error) {
    next(error);
  }
};

const createCartProduct: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const body = req.body as NewCartProduct;

    const cartProduct = await CartProduct.create({
      cartId: body.cartId,
      productId: body.productId,
      price: body.price,
      quantity: body.quantity,
    });

    res.json(cartProduct);
  } catch (error) {
    next(error);
  }
};

const updateCartProduct: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const { id: cartProductId } = req.params as { id: string };
    const body = req.body as NewCartProduct;
    const cartProduct = await CartProduct.update(
      {
        price: body.price,
        quantity: body.quantity,
      },
      { where: { cartProductId } }
    );

    res.json(cartProduct);
  } catch (error) {
    next(error);
  }
};

const deleteCartProduct: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const { id: cartId } = req.params as { id: string };
    await CartProduct.destroy({ where: { cartId } });

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export default {
  getCartProduct,
  createCartProduct,
  updateCartProduct,
  deleteCartProduct,
};
