import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

class Cart extends Model {}

Cart.init(
  {
    cartId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    sessionId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: { model: 'users', key: 'userId' },
    },
    addressId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: { model: 'address', key: 'addressId' },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    userAgent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ipAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('sold', 'pending', 'canceled'),
      allowNull: false,
      defaultValue: 'pending',
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'cart',
  }
);

export default Cart;
