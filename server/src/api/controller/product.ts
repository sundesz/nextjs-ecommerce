/* eslint-disable @typescript-eslint/no-misused-promises */
import { NextFunction, RequestHandler } from 'express';
import Product from '../../db/models/products';
import { NewProduct } from '../../types/product';

const getProduct: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { id: productId } = req.params as { id: string };
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
};

const createProduct: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const body = req.body as NewProduct;
    const product = await Product.create({
      productCategoryId: body.productCategoryId,
      name: body.name,
      description: body.description,
      ean: body.ean,
      price: body.price,
      quantity: body.quantity,
    });

    res.json(product);
  } catch (error) {
    next(error);
  }
};

const updateProduct: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { id: productId } = req.params as { id: string };
    const body = req.body as NewProduct;

    const product = await Product.update(
      {
        productCategoryId: body.productCategoryId,
        name: body.name,
        description: body.description,
        ean: body.ean,
        price: body.price,
        quantity: body.quantity,
      },
      { where: { productId } }
    );

    res.json(product);
  } catch (error) {
    next(error);
  }
};

export default {
  getProduct,
  createProduct,
  updateProduct,
};
