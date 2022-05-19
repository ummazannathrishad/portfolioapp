import React from 'react'
import resetpassimg from '../assets/image/resetpass.png'

const resetpass = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="form-section shadow mt-5 rounded-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-side-image border-end">
                                <img src={resetpassimg} alt="resetpassimage" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <form action="" method="post" className="needs-validation p-4" novalidate>
                                <h3 className="mb-4">Reset Password</h3>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-12">
                                        <div className="input-group has-validation">
                                            <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                                            <input type="password" className="form-control" name="password" id="password" placeholder="New Password"  required/>
                                            <div className="invalid-feedback">
                                                Please choose a username.
                                              </div>
                                        </div>

                                        <div className="input-group has-validation mt-3">
                                            <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                                            <input type="text" className="form-control" name="confirmpass" id="password" placeholder="Confirm Password" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button className="btn button-skyblue mt-3"><i className="fa-solid fa-arrow-rotate-right"></i> Reset Password</button>
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

export default resetpass