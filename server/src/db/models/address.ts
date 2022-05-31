import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

class Address extends Model {}

Address.init(
  {
    addressId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'users', key: 'userId' },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 5,
        max: 5,
      },
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    freezeTableName: true,
    tableName: 'address',
  }
);

export default Address;
