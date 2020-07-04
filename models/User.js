const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
});

module.exports = User;
