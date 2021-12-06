import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./profile.css";
import { connect } from "react-redux";

const Profile = (props) => {
    console.log(props);
    return (
        <div className="profile-container" >
            <Container>
                <Row>
                    <Col sm={6}>
                        Name<Form.Control
                            type="text"
                            value={props.user.name}
                            readOnly />
                        Email<Form.Control
                            type="text"
                            value={props.user.email}
                            readOnly />
                        Password<Form.Control
                            type="text"
                            value={props.user.password}
                            readOnly />

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => {
    let lUser = { isLoggedIn: false };
    state.userReducer.forEach((user) => {
        if (user.isLoggedIn === true)
            return lUser = user;
    });
    // console.log(state.userReducer);
    return { user: lUser };
}
export default connect(mapStateToProps)(Profile);