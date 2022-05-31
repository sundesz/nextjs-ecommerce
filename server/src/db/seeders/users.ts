import { Seeder } from '..';

const seedUsers = [
  {
    user_id: '70163e63-9c9d-4809-af40-16b1bcdb3651',
    name: 'root',
    username: 'root',
    password: '$2a$12$ZBeEeJK/vnt.h9CG.1KIv.URtwNZOR4Ip1BwjEGOIC.No9padVSTa', //admin
  },
];

export const up: Seeder = async ({ context: queryInterface }) => {
  await queryInterface.bulkInsert('users', seedUsers);
};

export const down: Seeder = async ({ context: queryInterface }) => {
  await queryInterface.bulkDelete('users', {
    id: seedUsers.map((u) => u.user_id),
  });
};
