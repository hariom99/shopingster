import React from "react";
import { connect } from "react-redux";
import Login from "../login/login";
import { Row, Col, Card } from "react-bootstrap";
const UserOrders = (props) => {

    // console.log(props);
    const user = props.user;
    const orders = props.orders;
    // console.log(orders);
    let i = 10;

    // redirect user to login page

    return (
        <div>
            {user.isLoggedIn ?
                <div>
                    <span className="products-cat-heading" > My Orders </span>
                    <Row className="products-row" >

                        {orders.map((fashionItem, ind) => {
                            i++;
                            return <Col className="cards" key={fashionItem.itemId + (i * 2)} >
                                <Card className="product-cards" style={{ width: '16rem' }}>
                                    {/* <span title="delete Item" className="delete-from-cart" >
                                            <img src={dltImg} alt="dlt" />
                                        </span> */}

                                    <Card.Img className="card-img" variant="top" src={fashionItem.img} />
                                    <Card.Body>
                                        <Card.Title>{fashionItem.itemTitle}</Card.Title>
                                        <Card.Text>
                                            {fashionItem.itemDesc}
                                        </Card.Text>
                                        <span style={{ color: "green" }} >
                                            shipping soon
                                        </span>
                                        <span className="item-price" >
                                            <span className="line-price" >900</span>
                                            <span>{fashionItem.itemPrice}</span>
                                        </span>
                                    </Card.Body>
                                </Card>
                            </Col>

                        })}
                    </Row>
                </div>
                :
                <Login />

            }
        </div>
    );
}

const mapStateToProps = (state) => {
    let user = { isLoggedIn: false };
    state.userReducer.forEach((ele) => {
        if (ele.isLoggedIn === true) {
            user = ele;
            return
        }

    });

    // console.log(state);
    return { orders: state.orders, user };
}

export default connect(mapStateToProps)(UserOrders);