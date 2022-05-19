require('dotenv/config');

const env = process.env.ENV || 'development';

const database = {
  development: 'devschema',
  production: 'prodschema',
};

module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: database[env],
  synchronize: true,
  logging: false,
  entities: process.env.TS_NODE ? ['src/Entity/**/*.ts'] : ['dist/src/Entity/**/*.js'],
  migrations: ['migration/**/*.ts'],
  subscribers: ['subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'entites',
    migrationsDir: 'migration',
    subscribersDir: 'subscriber',
  },
};
