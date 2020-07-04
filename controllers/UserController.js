const User = require('../models/User');

module.exports = {
  createUser: async (req, res) => {
    const { data } = req.body.simponi_req;
    try {
      const getData = await User.findAll({ where: { firstName: data[0] } });
      if (getData.length > 0) {
        res.status(500).json({
          simponi_result: {
            method: 'activeinquiry_minerba',
            data: [data[0], data[1]],
            response_code: 2,
          },
        });
      } else {
        await User.create({
          firstName: data[0],
          lastName: data[1],
          age: data[2],
        });
        res.status(200).json({
          simponi_result: {
            method: 'activeinquiry_minerba',
            data: [data[0], data[1]],
            response_code: 3,
          },
        });
      }
      // const getUser = await User.findAll({ where: { lastName: lastName } });
      // if (getUser.length > 0) {
      //   res.status(200).json({ message: 'User sudah tersedia' });
      // } else {
      //   const user = await User.create({
      //     firstName,
      //     lastName,
      //     age,
      //   });
      //   res.status(200).json(user);
      // }
    } catch (error) {
      console.log(error.message);
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findAll();
      res.status(200).json(user);
    } catch (error) {
      console.log(error.message);
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findOne({ where: { id: req.params.id } });
      res.status(200).json(user);
    } catch (error) {
      console.log(error.message);
    }
  },
  updateUser: async (req, res) => {
    const { firstName, lastName, age } = req.body;
    try {
      const user = await User.update(
        {
          firstName,
          lastName,
          age,
        },
        { where: { id: req.params.id } }
      );
      res.status(200).json({ message: 'User Updated!' });
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: 'User Deleted!' });
    } catch (error) {
      console.log(error.message);
    }
  },
};
