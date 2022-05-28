let express = require("express");
let app = express();
const bcrypt = require('bcrypt')
let mongoose = require('mongoose');
let bodyParser = require("body-parser");
let User = require('./userInfoSchema')
const cors = require('cors')

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
)
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://atul:h6iRSWoWXaOUTPgi@cluster0.yavrk.mongodb.net/practiceOne?retryWrites=true&w=majority")

app.post('/login', async (req, res)=>{
    let JSONData = req.body
    let email = JSONData.email;
    let rPassword = JSONData.password;

            let user = await User.findOne({email: email})
            if(user){
                let pass = user.password;
                let auth = await bcrypt.compare(rPassword, pass);
                if(auth == true){
                    console.log("logged in")
                }else{
                    console.log("Wrong pass")
                }
            } else{
                console.log("User not found")
            }
})
app.listen('8080', ()=>{
    console.log("listening From Login")
})