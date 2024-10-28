const {Router} = require('express');
const doctorRouter= Router();
const doctorController = require('../controllers/doctorController');

doctorRouter.get('/doctors', doctorController.getDoctors)

module.exports= doctorRouter;