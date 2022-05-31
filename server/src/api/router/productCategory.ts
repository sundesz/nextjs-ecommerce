import { Router } from 'express';
import ProductCategoryController from '../controller/productCategory';

const ProductCategoryRouter = Router();

ProductCategoryRouter.get('/:id', ProductCategoryController.getProductCategory);
ProductCategoryRouter.post(
  '/',
  ProductCategoryController.createProductCategory
);
ProductCategoryRouter.put(
  '/:id',
  ProductCategoryController.updateProductCategory
);

export default ProductCategoryRouter;
