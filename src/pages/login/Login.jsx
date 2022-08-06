import React, { useReducer, useState } from "react";
import axios from "axios";
import { Header } from "../../components";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";

const initialState = {
    loginInfo: {
        email: "",
        password: "",
    },
    data: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case "EMAIL":
            return {
                ...state,
                loginInfo: {
                    ...state.loginInfo,
                    email: action.email,
                },
            };
        case "PASSWORD":
            return {
                ...state,
                loginInfo: {
                    ...state.loginInfo,
                    password: action.password,
                },
            };
        case "DATA":
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

const Login = () => {
    const [state, dispach] = useReducer(reducer, initialState);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        axios
            .post(
                `https://backend.aromapedia.ma/api/login?email=${state.loginInfo.email}&password=${state.loginInfo.password}`
            )
            .then((res) => {
                setUser(res.data);
                localStorage.setItem("user", JSON.stringify(res.data.data));
            })
            .catch((err) => setError(err));
    };

    return (
        <div>
            <Header />
            <main className="login">
                {error && (
                    <div className="message">
                        Email or Password is Incorrect
                    </div>
                )}
                {user && <Navigate to="/" replace={true} />}
                <div className="card">
                    <div className="login-title">LOGIN</div>
                    <form>
                        <input
                            type="text"
                            name="email"
                            placeholder="email"
                            value={state.loginInfo.email}
                            required
                            onChange={(e) =>
                                dispach({
                                    type: "EMAIL",
                                    email: e.target.value,
                                })
                            }
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={state.loginInfo.password}
                            onChange={(e) =>
                                dispach({
                                    type: "PASSWORD",
                                    password: e.target.value,
                                })
                            }
                        />
                        <div>
                            You Don't Have Account{" "}
                            <Link to="/register">Register</Link>
                        </div>
                        <button
                            onClick={(e) => handleSubmitLogin(e)}
                            type="submit"
                        >
                            LogIn
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Login;
