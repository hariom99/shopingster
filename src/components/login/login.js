import React, { useState, useRef } from "react";
import "./login.css";
import { Form, Button } from "react-bootstrap"
import { connect } from "react-redux";
import { actionTypes } from "../../redux/actionTypex";
import { withRouter } from "react-router";

const Login = (props) => {

    // console.log(props);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userLog, setUserLog] = useState(null);

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const setUserEmail = (e) => {
        setEmail(e.target.value)
    }

    const setUserPassword = (e) => {
        setPassword(e.target.value)
    }

    // console.log(props.match.path);

    const verifyUser = props.verifyUser;

    // onclick login
    const loginUser = (e) => {
        // e.preventDefault();
        emailRef.current.value = "";
        passwordRef.current.value = "";

        // console.log(props.userData);

        if (props.userData === undefined) {
            setUserLog("Invalid UserId/Password, Or not registered !!");
        }
        else {
            let flag = true;
            // console.log("hi");
            props.userData.forEach((val) => {
                // console.log(val);
                if (email === val.email && password === val.password) {
                    flag = false;


                    setUserLog("login success");
                    verifyUser(val.userId);
                    if (props.match.path === "/cart")
                        setTimeout(() => { props.history.push("/cart"); }, 2000);
                    else if (props.match.path === "/myorders")
                        setTimeout(() => { props.history.push("/myorders"); }, 2000);
                    else
                        setTimeout(() => { props.history.push("/"); }, 2000);

                    // alert("login success");
                    return;
                }
            })
            if (flag)
                setUserLog("Invalid UserId/Password, Or not registered !!");
        }
    }
    return (
        <div className="login-parent" >
            <Form>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} ref={emailRef} onChange={setUserEmail} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} value={password} onChange={setUserPassword} placeholder="Password" />
                </Form.Group>
                <Button onClick={loginUser} variant="primary" type="button">
                    Submit
                </Button>
            </Form>
            <span>{userLog}</span>
        </div>);
}

const mapStateToProps = (state) => {
    if (state.userReducer.length === 0)
        return {};
    else {
        return {
            userData: state.userReducer
            // email: state.userReducer[0].email,
            // password: state.userReducer[0].password
        };
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        verifyUser: (value) => {
            dispatch({ type: actionTypes.LOGIN_USER, data: value });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));