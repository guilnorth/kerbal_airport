const passageiroController = require('../controllers/PassageiroController');
const express = require('express');
const router = express.Router();

router.post('/register', passageiroController.register);

router.get('/list/all', passageiroController.listAll);


module.exports = app => app.use('/api/passageiro', router);