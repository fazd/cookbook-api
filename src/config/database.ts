import { Sequelize } from 'sequelize';
import { configuration } from '.';

const { database: db, username, password, host } = configuration.database;

export const database = new Sequelize({ username, database: db, dialect: 'mysql', password, host: host });
