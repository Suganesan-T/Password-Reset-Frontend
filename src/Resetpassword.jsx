import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function Resetpassword() {

    let { resetToken } = useParams();
    const [newPassword, setNewPassword] = useState('');
  const [resetStatus, setResetStatus] = useState(null);

  const handleResetPassword = async () => {
    try {
      // Send a request to your backend to reset the password
      const response = await fetch('/api/resetPassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resetToken,
          password: newPassword,
        }),
      });

      if (response.ok) {
        setResetStatus('success');
      } else {
        setResetStatus('error');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setResetStatus('error');
    }
  };
  return (
    <div classNameName="container">
            <div classNameName="row">
                <div classNameName="col-lg-12 d-flex justify-content-center alihn items center">
                    <div classNameName="form-signin w-50 m-auto">
                        <form onSubmit={handleResetPassword} >
                           
                            <h1 classNameName="h3 mb-3 fw-normal text-center mt-5">Reset Your Password</h1>
                            <div classNameName="form-floating">
                                <input type="password" classNameName="form-control" id="floatingPassword" placeholder="password"
                                    value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                                    
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