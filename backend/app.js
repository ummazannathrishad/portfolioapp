let mongoose = require('mongoose');
const express = require("express");
let app = express();
const bcrypt = require('bcrypt')
let bodyparser = require("body-parser");
app.use(bodyparser.json());

let User = require('./userInfoSchema')
const cors = require('cors')

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
)
mongoose.connect("mongodb+srv://atul:h6iRSWoWXaOUTPgi@cluster0.yavrk.mongodb.net/practiceOne?retryWrites=true&w=majority")

app.post('/register', (req, res) =>{
    let JSONData = req.body;

    if(JSONData['password'] != JSONData['cPassword']){
        res.end("Password Doesn't match")
    }else{
        bcrypt.hash(JSONData['password'], 10, (err, hash) =>{
            if(err){
                res.end(err)
            }else{
                let securePass = hash;
                let finalUserDetails = new User({
                    fName : JSONData['fName'],
                    lName : JSONData['lName'],
                    email: JSONData['email'],
                    password : securePass,
                })
    
                finalUserDetails.save()
                .then(result =>{
                    console.log(result)
                })
                .catch(err =>{
                    console.log(err)
                })
            }
        })
    }
})

app.listen(8080, ()=>{
    console.log("Listening......")
})