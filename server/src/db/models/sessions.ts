import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

class Session extends Model {}

Session.init(
  {
    // sid: {
    //   type: DataTypes.STRING,
    // },
    sessionId: {
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
    isValid: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'session',
  }
);

export default Session;
