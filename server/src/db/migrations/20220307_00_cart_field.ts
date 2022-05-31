import { DataTypes } from 'sequelize';
import { Migration } from '..';

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.addColumn('carts', 'email', {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  });

  await queryInterface.addColumn('carts', 'user_agent', {
    type: DataTypes.STRING,
    allowNull: false,
  });

  await queryInterface.addColumn('carts', 'ip_address', {
    type: DataTypes.STRING,
    allowNull: false,
  });
};

export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.removeColumn('carts', 'email');
  await queryInterface.removeColumn('carts', 'user_agent');
  await queryInterface.removeColumn('carts', 'ip_address');
};
