import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

class ProductCategory extends Model {}

ProductCategory.init(
  {
    productCategoryId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    freezeTableName: true,
    tableName: 'product_category',
  }
);

export default ProductCategory;
