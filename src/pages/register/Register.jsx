import React, { useReducer, useState } from "react";
import axios from "axios";
import { Header } from "../../components";
import "./Register.css";
import { Navigate } from "react-router-dom";

const initialState = {
    userName: "",
    fName: "",
    lName: "",
    email: "",
    password: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "USER_NAME":
            return {
                ...state,
                userName: action.userName,
            };
        case "FNAME":
            return {
                ...state,
                fName: action.fName,
            };
        case "LNAME":
            return {
                ...state,
                lName: action.lName,
            };
        case "EMAIL":
            return {
                ...state,
                email: action.email,
            };
        case "PASSWORD":
            return {
                ...state,
                password: action.password,
            };
        default:
            return state;
    }
};

const Register = () => {
    const [registerInfo, dispach] = useReducer(reducer, initialState);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [empty, setEmpty] = useState({
        un: null,
        fn: null,
        ln: null,
        em: null,
        ps: null,
    });

    const handleSubmitRegister = () => {
        if (registerInfo.userName === "") return setEmpty({ un: "User Name" });
        if (registerInfo.fName === "") return setEmpty({ fn: "Frist Name" });
        if (registerInfo.lName === "") return setEmpty({ ln: "Last Name" });
        if (registerInfo.email === "") return setEmpty({ em: "Email" });
        if (registerInfo.password === "") return setEmpty({ ps: "Password" });
        axios
            .post(
                `https://backend.aromapedia.ma/api/register?name=${registerInfo.userName}&email=${registerInfo.email}&password=${registerInfo.password}&first_name=${registerInfo.fName}&last_name=${registerInfo.lName}`
            )
            .then((res) => setUser(res.data))
            .catch((err) => setError(err));
    };

    return (
        <>
            <Header />
            <main className="register">
                {error && (
                    <div className="message">
                        This Email Is already Registered
                    </div>
                )}
                {user && <Navigate to="/" replace={true} />}
                <div className="container">
                    <div className="card">
                        <div className="register-title">REGISTER</div>
                        <form>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                required
                                value={registerInfo.userName}
                                onChange={(e) =>
                                    dispach({
                                        type: "USER_NAME",
                                        userName: e.target.value,
                                    })
                                }
                            />
                            {empty.un ? (
                                <div className="empty">
                                    {empty.un} Can't Be Empty
                                </div>
                            ) : (
                                ""
                            )}
                            <input
                                type="text"
                                name="first-name"
                                placeholder="First Name"
                                required
                                value={registerInfo.fName}
                                onChange={(e) =>
                                    dispach({
                                        type: "FNAME",
                                        fName: e.target.value,
                                    })
                                }
                            />
                            {empty.fn ? (
                                <div className="empty">
                                    {empty.fn} Can't Be Empty
                                </div>
                            ) : (
                                ""
                            )}
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                required
                                value={registerInfo.lName}
                                onChange={(e) =>
                                    dispach({
                                        type: "LNAME",
                                        lName: e.target.value,
                                    })
                                }
                            />
                            {empty.ln ? (
                                <div className="empty">
                                    {empty.ln} Can't Be Empty
                                </div>
                            ) : (
                                ""
                            )}
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email"
                                value={registerInfo.email}
                                onChange={(e) =>
                                    dispach({
                                        type: "EMAIL",
                                        email: e.target.value,
                                    })
                                }
                            />
                            {empty.em ? (
                                <div className="empty">
                                    {empty.em} Can't Be Empty
                                </div>
                            ) : (
                                ""
                            )}
                            <input
                                type="password"
                                name="password"
                                required
                                placeholder="Password"
                                value={registerInfo.password}
                                onChange={(e) =>
                                    dispach({
                                        type: "PASSWORD",
                                        password: e.target.value,
                                    })
                                }
                            />
                            {empty.ps ? (
                                <div className="empty">
                                    {empty.ps} Can't Be Empty
                                </div>
                            ) : (
                                ""
                            )}
                            <input
                                type="checkbox"
                                required
                                id="agree"
                                name="remember"
                            />{" "}
                            <label htmlFor="agree">
                                agree to Terms of Service , Code of Conduct ,
                                and Privacy Policy .
                            </label>
                            <button
                                onClick={handleSubmitRegister}
                                type="button"
                            >
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Register;
