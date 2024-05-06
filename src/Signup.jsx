import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import userService from "./services/userServices";

function Signup() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleRegister = (e) => {
        e.preventDefault();
        //perform user registration
        userService.register(name,email,password)
            .then(response => {
                alert(response.data.message)

                //clear the form
                setName("")
                setEmail("")
                setPassword("")

                //redirect to login page
                setTimeout(() => {
                    navigate("/")
                }, 500);
            })
            .catch(error => {
                alert(error.response.data.message);
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center alihn items center">
                    <div className="form-signin w-50 m-auto">
                        <form onSubmit={handleRegister}>
                            <FaUserCircle size={100} />
                            <h1 className="h3 mb-3 fw-normal text-center">Please sign up</h1>

                            <div className="form-floating mt-3">
                                <input type="name" className="form-control" id="floatingName" placeholder="Password"
                                    value={name} onChange={(e) => setName(e.target.value)}
                                />
                                <label for="floatingName">Name</label>
                            </div>

                            <div className="form-floating mt-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mt-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <button className="btn btn-primary w-100 py-2 mt-4" type="submit">Sign up</button>
                            <p className="mt-3 mb-3 text-body-secondary"> Have account? <Link to="/">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup