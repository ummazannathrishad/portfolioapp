import React, {useState} from 'react';
import loginimg from '../assets/image/login pic.png';
// import {Navigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   fetch('/login')
  //   .then(res => res.json())
  //   .then(data => {
  //     setEmail(data.email);
  //     // console.log(data);
  //   })
  // }, [])

  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:8080/login', JSON.stringify({email, password}),
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
      setSuccess(true);
    }
    catch(err) {
      if(!err?.response?.data?.message) {
        console.log('Error: ', err);
      }
    }
    
  }
  return (
    <div className="login">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="login-section shadow rounded-5 ">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img border-end">
                                <img src={loginimg} alt="login" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form action="/login" method="post" className="form-section" onSubmit={handleSubmit}>
                                <h3>Sign in</h3>
                                <div className="mb-3">
                                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                  <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=> setEmail(e.target.value)} value={email}/>
                                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                  <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={(e)=> setPassword(e.target.value)} value={password}/>
                                </div>
                                <div className="mb-3 form-check">
                                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                  <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                </div>
                                <button type="submit" className="btn button-skyblue" >Submit</button>
                                <p>
                                Reset Password? <a href="/forget-password">Click Here</a>
                                </p>
                                <p>
                                Create a new account. <a href="/">Click Here</a>
                                </p>
                              </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    </div>
  );
}
export default Login;
