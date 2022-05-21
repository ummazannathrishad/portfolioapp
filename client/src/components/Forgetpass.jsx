import React from 'react';
import forgetpass_img from '../assets/image/forgotpass.png';

const Forgetpass = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="form-section shadow mt-5 rounded-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-side-image border-end">
                                <img src={forgetpass_img} alt="forgetpassimage" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <form action="" method="" className="p-4">
                                <h3 className="mb-4">Forgot Password</h3>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-12">
                                        <div className="input-group">
                                            <span className="input-group-text" id="inputGroupPrepend"><i className="fa-solid fa-envelope"></i></span>
                                            <input type="text" className="form-control" name="email" id="email" placeholder="Enter Your Email Address"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button className="btn button-skyblue mt-3"><i className="fa-solid fa-paper-plane"></i> Sent Reset Link</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Forgetpass;