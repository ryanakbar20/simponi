var express = require('express');
var router = express.Router();
const userController = require('../controllers/UserController');

/* GET home page. */
router.post('/', userController.createUser);
router.get('/', userController.getUser);
router.get('/:id', userController.getUserById);
router.delete('/:id', userController.deleteUser);
router.put('/:id', userController.updateUser);

module.exports = router;
