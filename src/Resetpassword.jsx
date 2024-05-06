import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Resetpassword() {

    let { resetToken } = useParams();
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(resetToken)
        axios.put(`https://password-reset-backend-sz6n.onrender.com/api/users/resetPassword/${resetToken}`, { password })

            .then(res => {
                if (res.data.status === 'success') {
                    navigate('/')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center alihn items center">
                    <div className="form-signin w-50 m-auto">
                        <form  >
                           
                            <h1 className="h3 mb-3 fw-normal text-center mt-5">Forget Password?</h1>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                    
                                />
                                <label for="floatingInput">Email address</label>

                                <button className="btn btn-primary w-100 py-2 mt-4 " type="submit">submit</button>
                                <p className="mt-3 mb-3 text-body-secondary"> <Link to="/">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resetpassword