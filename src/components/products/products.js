import React, { useRef } from "react";
import "./products.css"
import { Row, Col, Card, Button, Alert, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { actionTypes } from "../../redux/actionTypex";



function Products(props) {
    // const [alert, setAlert] = useState(false);
    const alertRef = useRef(null);
    const addToCart = props.addToCart;

    const mensRef = useRef(null);
    const girlsRef = useRef(null);
    const kidsRef = useRef(null);
    // const mobileRef = useRef(null);
    // const electronixRef = useRef(null);
    const groceryRef = useRef(null);

    let user = props.authUser;

    // console.log(user.isLoggedIn);

    const fashion = props.products.fashion;
    const allCategory = props.products;
    // console.log(allCategory);

    const addItemToCart = (user, item) => {
        if (user.isLoggedIn === true) {

            let userAddItemToCartData = {
                ...item, userId: user.userId
            };

            // console.log(userAddItemToCartData);
            // if(props.cartData[0].itemId)

            // console.log(props);

            alertRef.current.innerHTML = "Item added to cart successfully ...";
            alertRef.current.style.display = "block"
            setTimeout(() => {
                alertRef.current.style.display = "none"
            }, 700);
            // console.log(userAddItemToCartData);
            addToCart(userAddItemToCartData)


        }
        else {
            props.history.push("/login");
        }
    }

    const handleProductCat = (pCat) => {
        // console.log(pCat);
        window.scrollTo(0, pCat.current.offsetTop);
    }

    return (
        <div className="products-container" >
            <Alert className="alert-add-item" ref={alertRef} color="success">
                Item added to cart successfully !!!!!
            </Alert>

            <span className="products-cat-heading" > Fashion </span>
            <div className="products-nav" >
                <Nav className="justify-content-center" >
                    <Nav.Item>
                        <Nav.Link onClick={() => handleProductCat(mensRef)}  >Mens</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => handleProductCat(girlsRef)} >Girls</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => handleProductCat(kidsRef)} >Kids</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link onClick={() => handleProductCat("")} >Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => handleProductCat("Mobile")} >Electronix</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                        <Nav.Link onClick={() => handleProductCat(groceryRef)} >Grocery</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <Row ref={mensRef} className="products-row" >

                <h4>Men's Wear</h4>
                <br />
                <br />
                <br />
                {fashion.map((fashionItem) => {
                    if (fashionItem.itemId >= 9)
                        return null;
                    return <Col className="cards" key={fashionItem.itemId} >
                        <Card className="product-cards" style={{ width: '16rem' }}>
                            <Card.Img className="card-img" variant="top" src={fashionItem.img} />
                            <Card.Body>
                                <Card.Title>{fashionItem.itemTitle}</Card.Title>
                                <Card.Text>
                                    {fashionItem.itemDesc}
                                </Card.Text>
                                <Button onClick={() => addItemToCart(user, fashionItem)} variant="primary">Add to Cart</Button>
                                <span className="item-price" >
                                    <span className="line-price" >900</span>
                                    <span>{fashionItem.itemPrice}</span>
                                </span>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>




            {/* girls wear */}

            <Row ref={girlsRef} className="products-row" >
                <h4>Girls's Wear</h4>
                <br />
                <br />
                <br />
                {fashion.map((fashionItem) => {
                    if (fashionItem.itemId < 11 || fashionItem.itemId > 20)
                        return null;
                    else {
                        return <Col className="cards" key={fashionItem.itemId} >
                            <Card className="product-cards" style={{ width: '16rem' }}>
                                <Card.Img className="card-img" variant="top" src={fashionItem.img} />
                                <Card.Body>
                                    <Card.Title>{fashionItem.itemTitle}</Card.Title>
                                    <Card.Text>
                                        {fashionItem.itemDesc}
                                    </Card.Text>
                                    <Button onClick={() => addItemToCart(user, fashionItem)} variant="primary">Add to Cart</Button>
                                    <span className="item-price" >
                                        <span className="line-price" >900</span>
                                        <span>{fashionItem.itemPrice}</span>
                                    </span>
                                </Card.Body>
                            </Card>
                        </Col>
                    }
                })}
            </Row>



            {/* // kids Wear */}

            <Row ref={kidsRef} className="products-row" >
                <h4>Kids's Wear</h4>
                <br />
                <br />
                <br />
                {fashion.map((fashionItem) => {
                    if (fashionItem.itemId < 21)
                        return null;
                    return <Col className="cards" key={fashionItem.itemId} >
                        <Card className="product-cards" style={{ width: '16rem' }}>
                            <Card.Img className="card-img" variant="top" src={fashionItem.img} />
                            <Card.Body>
                                <Card.Title>{fashionItem.itemTitle}</Card.Title>
                                <Card.Text>
                                    {fashionItem.itemDesc}
                                </Card.Text>
                                <Button onClick={() => addItemToCart(user, fashionItem)} variant="primary">Add to Cart</Button>
                                <span className="item-price" >
                                    <span className="line-price" >900</span>
                                    <span>{fashionItem.itemPrice}</span>
                                </span>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>




            <Row ref={groceryRef} className="products-row" >
                <h4>Grocery</h4>
                <br />
                <br />
                <br />
                {allCategory.grocery.map((grocery) => {


                    return <Col className="cards" key={grocery.itemId} >
                        <Card className="product-cards" style={{ width: '16rem' }}>
                            <Card.Img className="card-img" variant="top" src={grocery.img} />
                            <Card.Body>
                                <Card.Title>{grocery.itemTitle}</Card.Title>
                                <Card.Text>
                                    {grocery.itemDesc}
                                </Card.Text>
                                <Button onClick={() => addItemToCart(user, grocery)} variant="primary">Add to Cart</Button>
                                <span className="item-price" >
                                    <span className="line-price" >900</span>
                                    <span>{grocery.itemPrice}</span>
                                </span>
                            </Card.Body>
                        </Card>
                    </Col>

                })}
            </Row>


        </div>
    );
}


const mapStateToProps = (state) => {
    // console.log(state.cart)
    let authUser = { isLoggedIn: false };
    state.userReducer.map((user) => {
        if (user.isLoggedIn === true)
            // console.log(user);
            authUser = user
        return user;


    });
    // console.log(state.products[0].fashion[0]);
    return { products: state.products[0], authUser: authUser, cartData: state.cart };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (data) => {
            dispatch({ type: actionTypes.ADD_TO_CART, data: data });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);