const dotenv_1 = require('dotenv');
dotenv_1.config();
module.exports = {
  cookbook: {
    database: process.env.DATABASE || '',
    username: 'root',
    password: process.env.PASSWORD || '',
    port: process.env.DB_PORT || '',
    dialect: 'mysql',
    logging: false,
  },
};
