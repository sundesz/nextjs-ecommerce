/* eslint-disable @typescript-eslint/no-misused-promises */
import { NextFunction, RequestHandler } from 'express';
import ProductCategory from '../../db/models/productCategory';
import { NewProductCategory } from '../../types/productCategory';

const getProductCategory: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const { id: productCategoryId } = req.params as { id: string };

    const productCategory = await ProductCategory.findByPk(productCategoryId);

    if (!productCategory) {
      return res.status(404).json({ error: 'ProductCategory not found' });
    }

    res.json(productCategory);
  } catch (error) {
    next(error);
  }
};

const createProductCategory: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const body = req.body as NewProductCategory;

    const productCategory = await ProductCategory.create({
      categoryName: body.categoryName,
    });

    res.json(productCategory);
  } catch (error) {
    next(error);
  }
};

const updateProductCategory: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const { id: productCategoryId } = req.params as { id: string };
    const body = req.body as NewProductCategory;

    const productCategory = await ProductCategory.update(
      { categoryName: body.categoryName },
      { where: { productCategoryId } }
    );

    res.json(productCategory);
  } catch (error) {
    next(error);
  }
};

export default {
  getProductCategory,
  createProductCategory,
  updateProductCategory,
};
