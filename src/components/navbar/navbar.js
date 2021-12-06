import React, { useRef, useEffect } from 'react'
import "./navbar.css"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { actionTypes } from '../../redux/actionTypex';


function NavbarApp(props) {

    // console.log(props);

    const loginRef = useRef(null)
    const registerRef = useRef(null)
    const logoutRef = useRef(null)
    const profileRef = useRef(null)

    // console.log(props.loggedInUser.isLoggedIn);
    const isUserLoggedIn = props.loggedInUser.isLoggedIn;
    const userId = props.loggedInUser.userId;

    const logOutHandeler = (id) => {
        // console.log(id);
        props.logOutUser(id);
        props.history.push("/")
    }

    useEffect(() => {

        if (isUserLoggedIn === true) {
            loginRef.current.style.display = "none";
            registerRef.current.style.display = "none";
            logoutRef.current.style.display = "block";
            profileRef.current.style.display = "block";
        }
        else {
            logoutRef.current.style.display = "none";
            profileRef.current.style.display = "none";
            loginRef.current.style.display = "block";
            registerRef.current.style.display = "block";
        }

    }, [isUserLoggedIn])


    const goToLink = (path) => {
        // console.log(props);
        props.history.push(path);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="nav-brand-logo" onClick={() => goToLink("/")} >Shoppingster<span>.com</span></Navbar.Brand>
                    <Navbar.Toggle className="justify-content-center" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav  >

                            <Nav.Link eventKey={1} onClick={() => { goToLink("/") }} >Home</Nav.Link>
                            <Nav.Link eventKey={2} onClick={() => { goToLink("/products") }} >Products</Nav.Link>
                            <Nav.Link eventKey={3} onClick={() => { goToLink("/cart") }} > Cart</Nav.Link>
                            <Nav.Link eventKey={4} onClick={() => { goToLink("/myorders") }} > My Orders</Nav.Link>
                            <Nav.Link eventKey={5} ref={loginRef} onClick={() => { goToLink("/login") }} >Login</Nav.Link>

                            <Nav.Link eventKey={6} ref={registerRef} onClick={() => { goToLink("/register") }} >Register</Nav.Link>
                            <Nav.Link eventKey={7} ref={profileRef} onClick={() => { goToLink("/profile") }} >Profile</Nav.Link>
                            <Nav.Link eventKey={8} ref={logoutRef} onClick={() => { logOutHandeler(userId) }} >Log Out</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state.userReducer)
    let userData;
    // console.log(state)
    state.userReducer.forEach(element => {
        if (element.isLoggedIn === true) {
            userData = element;
        }
        else {
            userData = { isLoggedIn: false }
        }
    });
    return { loggedInUser: userData }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOutUser: (userId) => {
            dispatch({ type: actionTypes.LOG_OUT_USER, data: userId });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavbarApp));
