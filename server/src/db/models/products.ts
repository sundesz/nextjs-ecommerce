import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

class Product extends Model {}

Product.init(
  {
    productId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    productCategoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'product_category', key: 'productCategoryId' },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ean: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    modelName: 'product',
  }
);

export default Product;
