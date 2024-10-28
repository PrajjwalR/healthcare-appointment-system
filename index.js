const express = require("express")
const PORT= 3000;
const app = express()
const sqlConnection = require('./db/sql')
const mongodb = require('./db/mongodb')
const doctorRoutes = require('./routes/doctorRoutes')
const patientRoutes = require('./routes/patientRoutes')
const appointmentRoutes = require('./routes/appointmentRoutes')
app.use(express())


app.use('/api', doctorRoutes)
app.use('/api', patientRoutes)
app.use('/api', appointmentRoutes)



app.listen(PORT , async() =>{
    await mongodb;
    await sqlConnection
    console.log(`server running https://localhost:${PORT}`);
})