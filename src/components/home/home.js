import React from "react";
import ControlledCarousel from "../carousel/carousel";
import { connect } from "react-redux";



function Home(props) {

    // const isUserLoggedIn = props.isUserLoggedIn;

    // console.log(isUserLoggedIn.isLoggedIn);
    return (
        <div>
            <div className="carousel">

                <ControlledCarousel />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    let isUserLoggedIn;
    state.userReducer.forEach(element => {
        if (element.isLoggedIn === true) {
            isUserLoggedIn = element;
            return;
        }
        else {
            isUserLoggedIn = { isLoggedIn: false };
        }
    });

    return { isUserLoggedIn: isUserLoggedIn };
}

export default connect(mapStateToProps)(Home);