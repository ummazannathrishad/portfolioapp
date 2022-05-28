import React, {useState} from 'react';
import axios from 'axios';
import signUp_img from '../assets/image/signup-img.png';

const Signup = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const handleSubmit =async (e) => {
        e.preventDefault();
        try{
          const response = await axios.post('http://localhost:8080/register', JSON.stringify({fname, lname, email, password, cpassword}),
          {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: true
          }
          );
          
          // console.log(JSON.stringify(response.data));
          // console.log(JSON.stringify(response));
          // const accessToken = response?.data?.accessToken;
          setEmail('');
          setPassword('');
        }
        catch(err) {
          if(!err?.response?.data?.message) {
            console.log('Error: ', err);
          }
        }
        
      }

    return (
        <section>
            <div className="container">
                <div className="full-part shadow-lg rounded-4 ">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={signUp_img} alt="" />
                            <h3>We're here to journey with you,</h3>
                            <h3> every step of the way.</h3>
                        </div>
                        <div className="col-md-6">
                            <h1>SignUp</h1>
                            <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                                <div className="col-md-6">
                                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Type Name" name="fname" onChange = {(e) => setFname(e.target.value)} value={fname}
                                        required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="validationCustom02" placeholder="Type Name" name="lname" onChange={(e) =>setLname(e.target.value)} value={lname}
                                        required />
                                </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} value={email} />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                            anyone else.</small>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                            placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password} />

                                        <br />

                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                            placeholder="Confirm Password" onChange={(e)=> setCPassword(e.target.value)} value={cpassword} />
                                    </div>

                                    <br />

                                    <button type="submit" className="btn button-skyblue">Submit</button>

                                    <div className="signup-under">
                                        <p>Already Have Account? <a href="/login" target="blank"> Log In.</a></p>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup;