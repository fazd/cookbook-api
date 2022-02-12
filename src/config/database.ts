import { Sequelize } from 'sequelize';

export const database = new Sequelize({ username: 'root', database: 'cookbook', dialect: 'mysql', password: 'root' });
