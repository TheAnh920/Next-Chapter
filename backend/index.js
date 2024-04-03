// Pretty much import the .env file which holds some variables such as our connection URI or our default port number.
require('dotenv').config()

const express = require('express');

// Just importing the required libraries
const app = express();
const mongoose = require('mongoose')
const routes = require('./routes/routes')

// Middleware
// This one allows us to write to the database in json form (I think?)
app.use(express.json())

// No clue what this does lmao
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

// Routes
// Routes will be declared in the routes.js file in the routes folder. This method in index.js will simply be here to load
// those routes.
app.use(routes)

// Connect to database
mongoose.connect(process.env.MONGO_URI)
    // Essentially delays the listening process until the app has successfully connected to the database
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('DB Connected. Listening on port', process.env.PORT);
        })
    })
    // A catch method meant for catching errors (quite self-explanatory)
    .catch((error) => {
        console.log(error)
    })



