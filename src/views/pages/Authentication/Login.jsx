import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password must be at most 20 characters")
        .required("Password is required"),
})

const Login = () => {
    // const [value, setValue] = useState([]);
    const [eye, setEye] = useState(true);
    const navigate = useNavigate();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const onclickEye = () => {
        setEye(!eye);
    }
    const onSubmit = async (data) => {
        // const checkLogin = await APIs.employees.InfoEmployeeByEmail(data.email, data.password);


        // if (data.email == "admin@gmail.com" && data.password == "123456") {
        //     localStorage.setItem("userType", "admin");

        //     navigate("/admin-dashboard");
        // } else if (checkLogin) {
        //     const value = {
        //         email: data?.email,
        //         password: data?.password
        //     }
        //     localStorage.setItem("userType", "user");
        //     localStorage.setItem("credencial", JSON.stringify(value));
        //     navigate("/user-dashboard");
        // }
        // else navigate("/login");
    }

    return (
        <>
            <div className="account-page">
                <div className="acount-page-wrapper">
                    <div className="container">
                        <div className="account-box">
                            <div className="account-wrapped">
                                <h3>Login</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="mb-3">
                                        <label class="form-label">Email Address</label>
                                        <Controller
                                            name="email"
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    className={`form-control`}
                                                    type="text"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    autoComplete="true"
                                                />
                                            )}
                                        />

                                        <span className='text-danger'>
                                            {" "}
                                            {errors.email?.message}{" "}
                                        </span>
                                    </div>
                                    <div class="mb-3">
                                        <div className="label-password">
                                            <label class="form-label">Password</label>
                                            <div className="forgot-label">
                                                <a href="forget-password">Forgot password?</a>
                                            </div>
                                        </div>
                                        <div style={{ position: "relative" }}>
                                            <Controller
                                                name="password"
                                                control={control}
                                                render={({ field }) => (
                                                    <input
                                                        className="form-control"
                                                        type={eye ? "password" : "text"}
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                )}

                                            />
                                            <span
                                                style={{
                                                    position: "absolute",
                                                    right: "10%",
                                                    top: "30%",
                                                    // zIndex: 99,
                                                }}
                                                onClick={onclickEye}
                                                className={`fa-solid ${eye ? "fa-eye-slash" : "fa-eye"
                                                    } `}
                                            />

                                            <span className="text-danger">
                                                {" "}
                                                {errors.password?.message}{" "}
                                            </span>

                                        </div>

                                    </div>
                                    <Button className='btn-login' type='submit' >
                                        Login
                                    </Button>
                                </form>
                                <div className="account-footer">
                                    <p>Don't have an account yet? <a href="register">Register</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Login;