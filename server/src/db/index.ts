// import Sequelize from 'sequelize';
import { Sequelize } from 'sequelize';
import { Umzug, SequelizeStorage } from 'umzug';
import { DATABASE_URL } from '../utils/config';

export const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    // ssl: {
    //   require: true,
    //   rejectUnauthorized: false,
    // },
  },
});

const migrationConf = {
  migrations: { glob: 'src/db/migrations/*.ts' },
  storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
  context: sequelize.getQueryInterface(),
  logger: console,
};

const umzug = new Umzug(migrationConf);

const runMigrations = async () => {
  const migrator = umzug;
  const migrations = await migrator.up();
  console.log('Migrations up to date', {
    files: migrations.map((file) => file.name),
  });
};

const runSeeder = async () => {
  const seedData = seeder;
  const seedDataFiles = await seedData.up();
  console.log('Seeder up to date', {
    files: seedDataFiles.map((file) => file.name),
  });
};

export const rollbackMigrations = async () => {
  try {
    await sequelize.authenticate();
    const migrator = umzug;
    await migrator.down();
  } catch (error) {
    console.log('failed to rollback: ', error);
  }
};

export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await runMigrations();
    await runSeeder();
    console.log('connect to database');
  } catch (error) {
    console.log('failed to connect to database: ', error);
    return process.exit(1);
  }

  return null;
};

export type Migration = typeof umzug._types.migration;

export const seeder = new Umzug({
  migrations: {
    // glob: ['src/db/seeders/*.ts', { cwd: __dirname }],
    glob: 'src/db/seeders/*.ts',
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({
    sequelize,
    modelName: 'seeder_meta',
  }),
  logger: console,
});

export type Seeder = typeof seeder._types.migration;
