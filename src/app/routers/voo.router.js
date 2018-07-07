const vooController = require('../controllers/VooController');
const express = require('express');
const router = express.Router();

router.post('/register', vooController.register);

router.get('/list/all', vooController.listAll);

router.get('/list/one/:numPassagem', vooController.listOne);

router.get('/list/air/all', vooController.listAllAeroportos);

router.get('/list/avioes/all', vooController.listAllAvioes);



module.exports = app => app.use('/api/voo', router);