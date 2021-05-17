const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');
//Middlwares
app.use(cors());
app.use(bodyParser.json());
//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);
// app.use('/user', userRoute);
//Middlewares
//a function that executes when routes are being hit
// app.use(auth);

//ROUTES
app.get('/', (req, res)=>{
    res.send('We are on home');
})

// app.get('/posts', (req, res)=>{
//     res.send('We are on posts');
// })


//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to DB!')
);

//How to start listening to the server?
app.listen(3000); 

