import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userService from './services/userServices'

function Forgetpass() {
    const navigate = useNavigate()

    const [email,setEmail] = useState("")

    const handleForgetPassword = (e) => {
        e.preventDefault()
        userService.forgetPassword(email)
        .then(responce => {
            console.log(responce)
            alert("check your email")
            setEmail("")
            setTimeout(() => {
                navigate("/resetPassword/:resetToken")
            }, 500);
        })
        .catch(error => {
            console.log(error)
        })
    }




    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center alihn items center">
                    <div className="form-signin w-50 m-auto">
                        <form onSubmit={handleForgetPassword} >
                           
                            <h1 className="h3 mb-3 fw-normal text-center mt-5">Forget Password?</h1>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                    value={email} onChange={(e) => setEmail(e.target.value)} 
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

export default Forgetpass