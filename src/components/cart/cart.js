import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Login from "../login/login";
import { Row, Col, Card, Button } from "react-bootstrap";
import "./cart.css";
import { actionTypes } from "../../redux/actionTypex";
// import dltImg from "./delete.png";

const Cart = (props) => {
    // const [cartData, setCartData] = useState(props.cartItems);
    // const [totalPrice, setTotalPrice] = useState(props.totalPrice);
    // console.log(totalPrice);
    // console.log(props);
    const user = props.user;
    const cartItems = props.cartItems;
    // console.log(cartItems);

    // redirect user to login page
    const deleteCartItem = (ind) => {
        props.deleteCartItem(ind);

    }

    const proceedToPayment = () => {
        props.addItemToOrders(cartItems);
        props.deleteAllItemFromCart();
        props.history.push("/verifying-userdata-processing-payment")
    }

    return (
        <div>
            {user.isLoggedIn ?
                cartItems.length > 0 ?
                    <div>
                        <span className="products-cat-heading" > My Cart </span>
                        <Row className="products-row" >

                            {props.cartItems.map((fashionItem, ind) => {
                                return <Col className="cards" key={fashionItem.itemId} >
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
                                            <Button onClick={() => { deleteCartItem(ind) }} variant="danger">Remove Item</Button>
                                            <span className="item-price" >
                                                <span className="line-price" >900</span>
                                                <span>{fashionItem.itemPrice}</span>
                                            </span>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            })}
                        </Row>
                        <div className="d-flex justify-content-center">
                            <div className="total-amount-cart" >Total Amount : {props.totalPrice} </div>
                            <Button onClick={proceedToPayment} variant="info" >Proceed To Payment..</Button>
                        </div>
                    </div>
                    : <h5>Ohhh snap cart is empty !!!!!  Please add items to cart <Link to="/products" >Click here to View Products</Link> </h5>
                :
                <Login />

            }
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log("data accessed from cart !!");
    let user = { isLoggedIn: false };
    let totalPrice = 0;
    state.userReducer.forEach((ele) => {
        if (ele.isLoggedIn === true) {
            user = ele;
            return
        }

    });
    state.cart.forEach((item) => {
        totalPrice += item.itemPrice;
    })



    // console.log(user);
    return { cartItems: state.cart, user, totalPrice: totalPrice };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCartItem: (itemIndex) => {
            dispatch({
                type: actionTypes.DELETE_CART_ITEM,
                data: itemIndex
            });
        },
        addItemToOrders: (item) => {
            dispatch({ type: actionTypes.ADD_ITEMS_TO_MY_ORDERS, data: item })
        },
        deleteAllItemFromCart: () => {
            // console.log("hii there cartt  ");
            dispatch({ type: actionTypes.DELETE_ALL_CART_ITEM })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);