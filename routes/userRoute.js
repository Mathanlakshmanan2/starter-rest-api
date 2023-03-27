const express = require('express');
const router = express.Router();
const {Login, LoginView, register, updateRegister, deleteRegister} = require('../controllers/userController');



router.route('/').get(LoginView).post(register);
router.route('/login').post(Login);
router.route('/:id').put(updateRegister).delete(deleteRegister);

module.exports = router;