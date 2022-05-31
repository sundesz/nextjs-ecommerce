import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

class CartProduct extends Model {}

CartProduct.init(
  {
    cartProductsId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    cartId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'carts', key: 'cartId' },
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'products', key: 'productId' },
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'cartProduct',
  }
);

export default CartProduct;
