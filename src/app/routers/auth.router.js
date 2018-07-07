const authController = require('../controllers/authController');
const express = require('express');
const router = express.Router();

router.post('/register', authController.register);

router.post('/authenticate', authController.authenticate);


router.delete('/sign-out', authController.sign_out);

module.exports = app => app.use('/api/auth', router);