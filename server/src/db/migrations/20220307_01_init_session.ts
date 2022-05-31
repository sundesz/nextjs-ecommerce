import { DataTypes } from 'sequelize';
import { Migration } from '..';

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.createTable('sessions', {
    session_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'users', key: 'user_id' },
    },
    is_valid: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
};

export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.dropTable('sessions');
};
