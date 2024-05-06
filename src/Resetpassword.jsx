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
                    navigate('/login')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div classNameName="container">
            <div classNameName="row">
                <div classNameName="col-lg-12 d-flex justify-content-center alihn items center">
                    <div classNameName="form-signin w-50 m-auto">
                        <form onSubmit={handleSubmit} >

                            <h1 classNameName="h3 mb-3 fw-normal text-center mt-5">Reset Your Password</h1>
                            <div classNameName="form-floating">
                                <input type="password" classNameName="form-control" id="floatingPassword" placeholder="password"
                                  onChange={(e) => setPassword(e.target.value)}

                                />
                                <label for="floatingPassword">Enter new password</label>

                                <button classNameName="btn btn-primary w-100 py-2 mt-4 " type="submit">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resetpassword