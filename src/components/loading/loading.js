import React from "react";
import { Spinner } from "react-bootstrap";
import "./loading.css";


const Loading = (props) => {
    // console.log(props);
    return (
        <div className="loading" >
            <span>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </span>
            <span className="refresh-text" >
                please do not refresh this page

                Payment processing......
                <span className="n" >
                    {setTimeout(() => {
                        props.history.push("/myorders");
                    }, 2000)}
                </span>
            </span>
        </div>
    );

}

export default Loading;