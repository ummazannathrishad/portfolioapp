let express = require("express");
let app = express();
let mongoose = require('mongoose');
let bodyParser = require("body-parser");
// const { json } = require("express/lib/response");
let User = require('./userInfoSchema')
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://atul:h6iRSWoWXaOUTPgi@cluster0.yavrk.mongodb.net/practiceOne?retryWrites=true&w=majority")
app.post('/login', (req, res)=>{
    let email = req.body.email;
    let password = req.body.password;
        User.findOne({email: email, password: password}, (err, user) => {
            if(err){
                res.end("error")
            }
            else if(!user){
                res.end("email or pass wrong or user not Found")
            }
            else{
                return(res.end("Logged In"))
            }
        })
})
app.listen('8080' , ()=>{
    console.log("listening From Login")
})