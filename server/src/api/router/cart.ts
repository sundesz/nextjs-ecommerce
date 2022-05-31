import { Router } from 'express';
import CartController from '../controller/cart';
import CartProductController from '../controller/cartProduct';

const CartRouter = Router();

CartRouter.get('/:id', CartController.getCart);
CartRouter.post('/', CartController.createCart);
CartRouter.put('/:id', CartController.updateCart);

CartRouter.get('/product/:id', CartProductController.getCartProduct);
CartRouter.post('/product', CartProductController.createCartProduct);
CartRouter.put('/product/:id', CartProductController.updateCartProduct);
CartRouter.delete('/product/:id', CartProductController.deleteCartProduct);

export default CartRouter;
