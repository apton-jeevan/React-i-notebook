const connectToMongo = require('./db');
const express = require('express')
const  cors = require('cors')
connectToMongo(); // connected to mongodb 
const app = express()
const port = 5000

app.use(cors()) // to counter the error " access to fetch the API from the https://localhost:3000 has been blocked by the CORS policy."
app.use(express.json())// to get request as json

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/note'))

// line of code registers a route at the URL path /api/auth with the Express application. The second argument to app.use() is the middleware function that will handle requests to this route. In this case, it is require('./routes/auth'), which means that the Express application will use the middleware functions defined in the file ./routes/auth.js to handle requests to the /api/auth route.

// the require() function is used to load the JavaScript module that defines the middleware functions for the corresponding route. In these modules, there could be multiple middleware functions that can handle different parts of the request-response cycle, such as authentication, data validation, and data manipulation. By using app.use(), we can register these middleware functions to specific routes in the application's middleware stack.

//callback function is just for printing it in console. it is optional i guess just to indiacte that succefully listenting at the mentioned port. main thing is app.listen(port)
app.listen(port, () => {
    console.log(`i Notebook backend  listening at http://localhost:${port}`)
})  
    