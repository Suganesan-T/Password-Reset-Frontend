import React from 'react'

function Resetpassword() {
  return (
    <div classNameName="container">
            <div classNameName="row">
                <div classNameName="col-lg-12 d-flex justify-content-center alihn items center">
                    <div classNameName="form-signin w-50 m-auto">
                        <form  >
                           
                            <h1 classNameName="h3 mb-3 fw-normal text-center mt-5">Reset Your Password</h1>
                            <div classNameName="form-floating">
                                <input type="password" classNameName="form-control" id="floatingPassword" placeholder="password"
                                    
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