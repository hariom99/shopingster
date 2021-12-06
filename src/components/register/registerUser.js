import React, { useState, useRef } from "react";
import "./register.css"
import { Form, Button } from "react-bootstrap"
import { connect } from "react-redux";
import { actionTypes } from "../../redux/actionTypex";
import { Link } from "react-router-dom";

function RegisterUser(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [RegMessage, setRegMessage] = useState(null);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const setUserName = (e) => {
        setName(e.target.value);
    }
    const setUserEmail = (e) => {
        setEmail(e.target.value);
    }
    const setUserPassword = (e) => {
        setPassword(e.target.value);
    }



    const registerUserToRedux = props.registerUserToRedux;

    // onclick register
    const registerUser = (name, email, password) => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        // console.log(name, email, password)
        registerUserToRedux(
            {
                name,
                email,
                password,
                isLoggedIn: false
            }
        )
        setRegMessage("registered successfully click here to login");
    }

    const LoginPageLink = () => {
        return <Link to="/login" >Login </Link>
    }

    return (
        <div className="register-parent" >
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} onChange={setUserName} placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} onChange={setUserEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} onChange={setUserPassword} type="password" placeholder="Password" />
                </Form.Group>
                <Button onClick={() => registerUser(name, email, password)} variant="primary" type="button">
                    Submit
                </Button>
            </Form>
            {RegMessage === null ? null :
                <span>{RegMessage} <LoginPageLink /> </span>
            }
        </div>

    );
}

const mapStateToProps = (state) => {
    // console.log(state);
    return { state: state }
}
const mapDispatchToProps = (dispatch) => {

    return {
        registerUserToRedux: (user) => {
            dispatch({ type: actionTypes.REGISTER_USER, data: user });
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);



