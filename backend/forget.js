const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const User = require('./userInfoSchema')
mongoose.connect("mongodb+srv://atul:h6iRSWoWXaOUTPgi@cluster0.yavrk.mongodb.net/practiceOne?retryWrites=true&w=majority", () => {
    console.log("mongodb connected");
},
    e => console.error(e)
)

const app = express();
app.use(bodyparser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
)

const JWT_SECRET = 'some super secret'
//For forgot password

app.post('/forget-password', async (req, res, next) => {
    const { email } = req.body;
    //console.log(email)

    //Is user existes
    const users = await User.findOne({ email: email });

    console.log(users)

    if (email != users.email) {
        return (res.end('User not registered'))
    }
    //User exists and create a One time link valid for 15 minutes
    const secret = JWT_SECRET + User.password
    const payload = {
        email: users.email,
        _id: users._id,
    }
    const token = jwt.sign(payload, secret, { expiresIn: '20m' })
    const link = `http://localhost:3000/reset-password?_id=${users._id}&token=${token}`
    console.log(link)
    res.end('Password resest link has been send to your email')
})

//For reset password

app.post('/reset-password', async (req, res, next) => {
    const { _id, token } = req.body
    console.log(_id, token);
    const users = await User.findOne({ _id: _id });
    console.log(users)
    // console.log(users.password)
    //const { password, password2 } = req.body
    const { password2, cpassword } = req.body
    //res.send(user)
    console.log(password2, cpassword)
    if (_id != users._id) {
        return (res.end('Invalid id'))
    }

    const secret = JWT_SECRET + User.password
    try {
        const payload = jwt.verify(token, secret)

        //Validate password and pasword2 should match and confirm password should be matched
        //we can simply find the user with the payload email and id finally update with new password
        //Always hash the password before saving
        if (password2 != cpassword) {
            res.send(" confirm password doesn't match");
        } else {
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password2, salt)
            //users.password2 = hashPassword
            users.password = hashPassword
            await users.save()
            res.json("password updated")
        }


        //res.render('reset-password', { email: user.email })
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})
app.listen(8080, () => {
    console.log("Server is on");
})