const mongoose = require('mongoose');

//we use mongoose.schema and pass an object for each field in our table
//we define the type of each field using built-in javascript types
//we specify if the field is required, and the error to provide if the field is not provided
//we export the schema so it can be used later.

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    created: {
        type: Date,
        required: [true, 'Created date is required']
    }
});

module.exports = userSchema;