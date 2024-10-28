const express = require('express');
const appointmentRouter = express.Router();
const appointmentController = require('../controllers/appointmentController');

appointmentRouter.post('/appointments', appointmentController.createAppointment);
appointmentRouter.get('/appointments/doctor/:doctorName', appointmentController.getAppointmentsByDoctor);
appointmentRouter.get('/patients/:id/appointments', appointmentController.getAppointmentHistory);

module.exports = appointmentRouter;
