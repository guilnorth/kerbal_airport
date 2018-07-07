const planetaController = require('../controllers/PlanetaController');
const express = require('express');
const router = express.Router();

router.post('/register', planetaController.register);

router.get('/list/all', planetaController.listAll);


module.exports = app => app.use('/api/planeta', router);