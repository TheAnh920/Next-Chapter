const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

// Just getting the Schema method from mongoose to declare the schema for our accounts table
const Schema = mongoose.Schema


const accountSchema = new Schema({
    
    // Declaring the fields in the accounts table
    username: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    favBookList: {
        type: [
          {
            bookId: String,
            bookTitle: String,
          }
        ]
    },

    

    favTagList: {
        type: [{ type: String }],
    },
},
    // Just declaring this so that each time there's a new entry, there'll be a timestamp for when it was added.
    { timestamps: true})

module.exports = mongoose.model('account', accountSchema)
