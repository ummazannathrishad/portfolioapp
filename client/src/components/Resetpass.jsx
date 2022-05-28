import React, {useState} from 'react'
import resetpassimg from '../assets/image/resetpass.png'
// import {useLocation} from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import querystring from 'query-string';

const Resetpass = () => {
    const [password2, setPassword] = useState('');
    const [cpassword, setConfirmPassword] = useState('');
    const [id, setId] = useState('');
    const [success, setSuccess] = useState(false);
    // const [location, setLocation] = useState('');

//     const search = useLocation().search;
//   const id = new URLSearchParams(search).get('id');
//   console.log(id);

            // const get_id = axios.get(`https:localhost:8080/reset-password/_id=${id}`);
            // console.log(get_id.data);
            const location = useLocation();
            const parsed = querystring.parse(location.search);
            const _id = parsed._id;
            const token = parsed.token;
            let message = '';
            let message_class = '';
    const onResetPass = async (e) => {
        e.preventDefault();
        
        try{
            // const get_id = await axios.get(`/reset-password`, JSON.stringify({id}),
            //     {
            //         responseType: 'arraybuffer',
            //         responseEncoding: 'binary'
            //     }
            // );
            // console.log(get_id.data);
            if(password2 !== cpassword) {
                setSuccess(false);
            }
            const response = await axios.post('http://localhost:8080/reset-password', JSON.stringify({_id, token, password2, cpassword}),
            {
                headers: { 'Content-Type': 'application/json'},
                withCredentials: true
            }
            );
             setSuccess(true);
        }
        catch(err){
            setSuccess(false);
        }

    }
    // if(message == "password updated"){
    //     // message_class = `
        
    //     // `;
    //     console.log('password updated');

    // }


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
                            
                            <form action="/reset-password" method="post" className="needs-validation p-4" noValidate onSubmit={onResetPass}>
                                <h3 className="mb-4">Reset Password</h3>
                                { 
                                success ? 
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                Password Updated
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>  : 
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                Password Not Updated
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div> 
                                }
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-12">
                                        {message_class}
                                        <div className="input-group has-validation">
                                            <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                                            <input type="password" className="form-control" name="password" id="password" placeholder="New Password" onChange={(e)=> setPassword(e.target.value)} value={password2}   required/>
                                            <div className="invalid-feedback">      
                                                Please choose a username.
                                              </div>
                                        </div>

                                        <div className="input-group has-validation mt-3">
                                            <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                                            <input type="password" className="form-control" name="confirmpass" id="password2" placeholder="Confirm Password" onChange={(e)=> setConfirmPassword(e.target.value)} value={cpassword} required/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button type="submit" className="btn button-skyblue mt-3"><i className="fa-solid fa-arrow-rotate-right"></i> Reset Password</button>
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

export default Resetpass