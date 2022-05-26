let mongoose = require('mongoose');
const express = require("express");
let app = express();

let bodyparser = require("body-parser");
app.use(bodyparser.json());

let User = require('./userInfoSchema')
const cors = require('cors')

app.use(cors())
mongoose.connect("mongodb+srv://atul:h6iRSWoWXaOUTPgi@cluster0.yavrk.mongodb.net/practiceOne?retryWrites=true&w=majority")

app.post('/register', (req, res) =>{
    let JSONData = req.body;

    console.log(JSONData);

    let finalUserDetails = new User({
        fName : JSONData['fName'],
        lName : JSONData['lName'],
        email: JSONData['email'],
        password : JSONData['password'],
    })

    finalUserDetails.save()
    .then(result =>{
        res.send(result)
    })
    .catch(err =>{
        console.log(err)
    })
})

app.listen(8080, ()=>{
    console.log("Listening......")
})