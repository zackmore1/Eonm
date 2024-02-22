import React, { useEffect } from "react";
import { Link, useParams, useLocation, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Row,
  Image,
  Form,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";
import Message from "../components/message";
import { addToCart, removeFromCart} from "../actions/cartActions";

function CartScreen() {
  const productId = useParams().id;
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const navigate = useNavigate();
  const authState = localStorage.getItem('auth_token')

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  };

  const checkOutHandler = () => {
    if(authState)
    {
        navigate('/shipping')
    }
    else{
        navigate('/login')
    }
  }

  return (
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message variant="info">
              Your cart is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((items) => (
                <ListGroup.Item key={items.product}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={items.image}
                        alt={items.name}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={3}>
                      <Link to={`/products/${items.product}`}>
                        {items.name}
                      </Link>
                    </Col>
                    <Col md={2}>${items.price}</Col>
                    <Col md={3}>
                      <Form.Control
                        as="select"
                        value={items.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(items.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(items.countInStock).keys()].map((x) => (
                          <option
                            key={x + 1}
                            value={x + 1}
                          >
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={1}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(items.product)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) Items
                </h2>
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.qty * item.price,
                  0
                )}
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  style={{ width: '100%' }}
                  onClick={checkOutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
  );
}

export default CartScreen;
