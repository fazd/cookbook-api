import { Sequelize } from 'sequelize';
import { configuration } from './index';

export const database = new Sequelize({ ...configuration.database });
