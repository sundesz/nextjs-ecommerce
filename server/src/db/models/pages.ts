import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

class Page extends Model {}

Page.init(
  {
    pageId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('header', 'menu', 'footer'),
      allowNull: false,
      defaultValue: 'header',
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'page',
  }
);

export default Page;
