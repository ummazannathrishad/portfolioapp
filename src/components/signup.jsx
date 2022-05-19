import React from 'react';
import signUp_img from '../assets/image/signup-img.png';

const signup = () => {
    return (
        <section>
            <div className="container">
                <div className="full-part shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={signUp_img} alt="" />
                            <h3>We're here to journey with you,</h3>
                            <h3> every step of the way.</h3>
                        </div>
                        <div className="col-md-6">
                            <h1>SignUp</h1>
                            <form className="row g-3 needs-validation" novalidate>
                                <div className="col-md-6">
                                    <label for="validationCustom01" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Type Name"
                                        required />
                                </div>
                                <div className="col-md-6">
                                    <label for="validationCustom02" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="validationCustom02" placeholder="Type Name"
                                        required />
                                </div>
                                <form>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                            anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                            placeholder="Password" />
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                            placeholder="Confirm Password" />
                                    </div>

                                    <button type="submit" className="btn button-skyblue">Submit</button>

                                    <div className="login">
                                        <p>Already Have Account? <a href="http://" target="blank"> Log In.</a></p>
                                    </div>
                                </form>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default signup