/* eslint-disable @typescript-eslint/no-misused-promises */
import { NextFunction, RequestHandler } from 'express';
import ProductImage from '../../db/models/productImages';
import { NewProductImage } from '../../types/productImage';

const getProductImage: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const { id: productImageId } = req.params as { id: string };
    const productImage = await ProductImage.findByPk(productImageId);

    if (!productImage) {
      return res.status(404).json({ error: 'Product image not found' });
    }

    res.json(productImage);
  } catch (error) {
    next(error);
  }
};

const createProductImage: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const body = req.body as NewProductImage;
    const productImage = await ProductImage.create({
      productId: body.productId,
      image: body.image,
    });

    res.json(productImage);
  } catch (error) {
    next(error);
  }
};

const updateProductImage: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const { id: productImageId } = req.params as { id: string };
    const body = req.body as NewProductImage;

    const productImage = await ProductImage.update(
      { image: body.image },
      { where: { productImageId } }
    );

    res.json(productImage);
  } catch (error) {
    next(error);
  }
};

const deleteProductImage: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const { id: productImageId } = req.params as { id: string };
    await ProductImage.destroy({ where: { productImageId } });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export default {
  getProductImage,
  createProductImage,
  updateProductImage,
  deleteProductImage,
};
