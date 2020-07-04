const { sequelize } = require('../config');
const User = require('../models/User');

sequelize.sync({ force: true }).then(() => {
  return User.bulkCreate([
    {
      id: 1,
      firstName: 'Ryan Akbar',
      lastName: 'Ferdiansyah',
      age: 18,
    },
    {
      id: 2,
      firstName: 'Ryan',
      lastName: 'Ferdiansyah',
      age: 18,
    },
    {
      id: 3,
      firstName: 'Akbar',
      lastName: 'Ferdiansyah',
      age: 18,
    },
  ]);
});
