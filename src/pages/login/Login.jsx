import React, { useState } from "react";
import axios from "axios";
import { Header } from "../../components";

import "./Login.css";

const Login = () => {
    const btn = document.querySelector(".btn");
    const login = document.querySelector(".login");
    const register = document.querySelector(".register");
    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
    const [registerInfo, setRegisteInfo] = useState({
        name: "",
        email: "",
        password: "",
    });
    // const [state, setState] = useState({ message: "", done: "", err: "" });

    const loginFN = () => {
        btn.style.left = "0px";
        login.style.left = "50px";
        register.style.left = "450px";
    };

    const registerFN = () => {
        btn.style.left = "110px";
        login.style.left = "-450px";
        register.style.left = "50px";
    };

    const handleSubmitLogin = () => {
        axios.post(`https://backend.aromapedia.ma/api/register?email=${registerInfo.email}.com&password=${registerInfo.password}
        `);
    };

    const handleSubmitRegister = () => {
        axios.post(
            `https://backend.aromapedia.ma/api/register?name=${registerInfo.name}&email=${registerInfo.email}.com&password=${registerInfo.password}
        `
        );
    };

    return (
        <div>
            <Header />
            <main className="login-register">
                <div className="card">
                    <div className="btns">
                        <div className="btn"></div>
                        <button onClick={loginFN} className="login-btn">
                            Login
                        </button>
                        <button onClick={registerFN} className="register-btn">
                            Register
                        </button>
                    </div>

                    <form className="login">
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={loginInfo.email}
                            required
                            onChange={(e) =>
                                setLoginInfo({
                                    ...loginInfo,
                                    email: e.target.value,
                                })
                            }
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={loginInfo.password}
                            onChange={(e) =>
                                setLoginInfo({
                                    ...loginInfo,
                                    password: e.target.value,
                                })
                            }
                        />
                        <input
                            type="checkbox"
                            id="remember-me"
                            name="remember"
                        />{" "}
                        <label htmlFor="remember-me">Remember Me</label>
                        <button onClick={handleSubmitLogin} type="submit">
                            Sign up
                        </button>
                    </form>
                    <form className="register">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            required
                            value={registerInfo.name}
                            onChange={(e) =>
                                setRegisteInfo({
                                    ...registerInfo,
                                    name: e.target.value,
                                })
                            }
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                            value={registerInfo.email}
                            onChange={(e) =>
                                setRegisteInfo({
                                    ...registerInfo,
                                    email: e.target.value,
                                })
                            }
                        />
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Password"
                            value={registerInfo.password}
                            onChange={(e) =>
                                setRegisteInfo({
                                    ...registerInfo,
                                    password: e.target.value,
                                })
                            }
                        />
                        <input
                            type="checkbox"
                            required
                            id="agree"
                            name="remember"
                        />{" "}
                        <label htmlFor="agree">
                            agree to Terms of Service , Code of Conduct , and
                            Privacy Policy .
                        </label>
                        <button onClick={handleSubmitRegister} type="submit">
                            Sign up
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Login;
