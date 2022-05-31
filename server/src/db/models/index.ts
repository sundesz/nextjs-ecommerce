import User from './users';
import Page from './pages';
import Address from './address';
import ProductCategory from './productCategory';
import Product from './products';
import ProductImage from './productImages';
import Cart from './carts';
import CartProduct from './cartProducts';

User.hasOne(Address);
Address.belongsTo(User);

User.hasMany(Cart);
Cart.belongsTo(User);

Cart.hasMany(Address);

Cart.hasMany(CartProduct);
CartProduct.belongsTo(Cart);

CartProduct.hasMany(Product);

Product.hasMany(ProductImage);
ProductImage.belongsTo(Product);

ProductCategory.hasMany(Product);
Product.belongsTo(ProductCategory);

export default {
  User,
  Page,
  Address,
  ProductCategory,
  Product,
  ProductImage,
  Cart,
  CartProduct,
};
