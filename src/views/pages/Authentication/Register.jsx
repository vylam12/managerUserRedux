import Button from 'react-bootstrap/Button';
const Register = () => {
    return (
        <>
            <div className="account-page">
                <div className="acount-page-wrapper">
                    <div className="container">
                        <div className="account-box">
                            <div className="account-wrapped">
                                <h3>Register</h3>

                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Repeat Password</label>
                                    <input type="password" class="form-control" />
                                </div>
                                <Button className='btn-login' >
                                    Register
                                </Button>
                                <div className="account-footer">
                                    <p>Already have an account? <a href="login">Login</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}


export default Register;