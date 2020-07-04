const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'Pitathaeng123', {
  host: 'localhost',
  dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  logging: false,
});

const sqConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, sqConnection };
