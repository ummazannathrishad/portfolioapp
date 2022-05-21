let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
    fName :{
        type: String,
        required: true,
    },
    lName :{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        index:{
            unique: true,
        },
        // match:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
    },
    password: {
        type: String,
        required: true,
    },
    // cPassword: {
    //     type: String,
    //     required: true,
    // }
})

const User = mongoose.model('userInfo', userSchema);

module.exports = User;