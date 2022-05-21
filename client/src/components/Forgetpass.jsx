import React, {useState} from 'react';
import forgetpass_img from '../assets/image/forgotpass.png';
import axios from 'axios';


const Forgetpass = () => {

  const [email, setEmail] = useState('');

  const handleForgetpass =async (e) => {
    e.preventDefault();
    try{
        const response = await axios.post('/forget-password', JSON.stringify({email}),
        {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: true
        }
        );
        console.log(JSON.stringify(response.data));
        // setEmail('');
    }
    catch(err){
        if(!err?.response?.data?.message) {
            console.log('Error: ', err);
        }
    }
  }


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
                            <form action="/forget-password" method="post" className="p-4" onSubmit={handleForgetpass}>
                                <h3 className="mb-4">Forgot Password</h3>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-12">
                                        <div className="input-group">
                                            <span className="input-group-text" id="inputGroupPrepend"><i className="fa-solid fa-envelope"></i></span>
                                            <input type="text" className="form-control" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="Enter Your Email Address"/>
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