import { useNavigate } from "react-router-dom";
import userService from "./services/userServices";

function Home() {

    const navigate = useNavigate()
    const handleLogout = () => {
        userService.logout()
            .then(responce => {
                alert(responce.data.message)
                setTimeout(() => {
                    navigate("/")
                }, 500);
            })
            .catch(error => {
                alert(error.response.data.message)
            })
    }

    return (
        <div className="my-5">

            <div className="container py-5" style={{ backgroundColor: "white" }}>
                <div className="text-center">
                    <h1 className="text-body-emphasis">You are logged in</h1>
                </div>
                <p className="col-lg-8 mx-auto lead">
                    This is a simple login/logout system which performs register user, login, logout and to change password by giving forget password
                </p>
                <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
            </div>
        </div>

    )
}

export default Home