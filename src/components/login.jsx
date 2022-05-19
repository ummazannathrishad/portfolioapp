import React from 'react';
import loginimg from '../assets/image/login pic.png';

const login = () => {
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
                            <form action="" method="" className="form-section">
                                <h3>Sign in</h3>
                                <div className="mb-3">
                                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                  <label for="exampleInputPassword1" className="form-label">Password</label>
                                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3 form-check">
                                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                  <label className="form-check-label" for="exampleCheck1">Remember me</label>
                                </div>
                                <button type="submit" className="btn button-skyblue">Submit</button>
                                <p>
                                Reset Password? <a href="/forgot-password">Click Here</a>
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
export default login;
