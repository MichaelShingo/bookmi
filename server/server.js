const express = require('express')
const gigRoutes = require('./routes/gigs')
const addressRoutes = require('./routes/addresses')
const mongoose = require('mongoose')
require('dotenv').config()



// init app & middleware
const app = express();

//process.env.PORT takes variables from the .env file which is in .gitignore
//prevents PORT number and other information from being visible when pushed to github

//middleware (runs between request and response)
app.use(express.json()) //if the request has a body, it attached it to the req object

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next(); 
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => { // only listen for requests after database connection established
            console.log('app listening on port 4000');
        })
    })
    .catch(() => {
        console.log('error')
    })
    
// routes
app.use('/api/gigs', gigRoutes) //attaches all routes to the app
//same as saying app.get, but now the get routes in gigRoutes is attached to app
app.use('/api/address', addressRoutes)

