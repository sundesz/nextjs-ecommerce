import { Router } from 'express';
import ProductController from '../controller/product';
import ProductImageController from '../controller/productImage';

const ProductRouter = Router();

ProductRouter.get('/:id', ProductController.getProduct);
ProductRouter.post('/', ProductController.createProduct);
ProductRouter.put('/:id', ProductController.updateProduct);

ProductRouter.get('/images/:id', ProductImageController.getProductImage);
ProductRouter.post('/images', ProductImageController.createProductImage);
ProductRouter.put('/images/:id', ProductImageController.updateProductImage);
ProductRouter.delete('/images/:id', ProductImageController.deleteProductImage);

export default ProductRouter;
