import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

class ProductImage extends Model {}

ProductImage.init(
  {
    productImagesId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'products', key: 'productId' },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'productImage',
  }
);

export default ProductImage;
