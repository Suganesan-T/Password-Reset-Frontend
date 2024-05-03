import { useNavigate } from 'react-router-dom';
import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import userService from './services/userServices';
import { useState } from 'react';

function SignIn() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault();
    //perform user registration
    userService.login(email, password)
      .then(responce => {
        alert(responce.data.message)

        //clear the form
        setEmail("")
        setPassword("")

        //redirect to login page
        setTimeout(() => {
          navigate("/home")
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
            <form onSubmit={handleLogin}>
              <IoLogIn size={100} />
              <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

              <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mt-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div className=" text-start my-3">
                <Link to="/forget-password">
                  Forget Password?
                </Link>
              </div>
              <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
              <p className="mt-3 mb-3 text-body-secondary">Don't have an account? <Link to="/signup">Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}
export default SignIn