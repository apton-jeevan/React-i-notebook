const connectToMongo = require('./db');
const express = require('express')
connectToMongo(); // connected to mongodb 
const app = express()
const port = 5000

app.use(express.json())// to get request as json

//Available Routes
app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))


//callback function is just for printing it in console. it is optional i guess . main thing is app.listen(port)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})  
    