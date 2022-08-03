import React from "react";
import { Header } from "../../components";
import "./Login.css";

const Login = () => {
    const btn = document.querySelector(".btn");
    const login = document.querySelector(".login");
    const register = document.querySelector(".register");

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
                            type="text"
                            name="username"
                            placeholder="Username"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <input
                            type="checkbox"
                            id="remember-me"
                            name="remember"
                        />{" "}
                        <label htmlFor="remember-me">Remember Me</label>
                        <button type="submit">Sign up</button>
                    </form>
                    <form className="register">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                        />
                        <input type="email" name="email" placeholder="Email" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <input type="checkbox" id="agree" name="remember" />{" "}
                        <label htmlFor="agree">
                            agree to Terms of Service , Code of Conduct , and
                            Privacy Policy .
                        </label>
                        <button type="submit">Sign up</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Login;
