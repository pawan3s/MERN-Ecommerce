import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import newArrivalImg from "../image/newArrival.png";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const userInfo = localStorage.getItem("userInfo");

  const addToCartHandler = () => {
    if (userInfo) {
      dispatch(addToCart(product._id, 1));
    } else {
      alert("Please Login First");
    }
  };
  return (
    <Card style={{ marginBottom: "1rem", position: "relative" }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          variant='top'
          src={product.image}
          style={{ objectFit: "cover", cursor: "pointer" }}
        />
      </Link>
      <div
        class='badge'
        style={{ position: "absolute", bottom: "65px", right: "-2px" }}
      >
        {product.newArrival ? (
          <img src={newArrivalImg} style={{ height: "50px", width: "60px" }} />
        ) : (
          ""
        )}
      </div>
      <Card.Body>
        <Card.Title>
          <strong>{product.name}</strong>{" "}
        </Card.Title>
        <Card.Text>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Title>
          {" "}
          <strong>Nrs. {product.price}</strong>
        </Card.Title>
        <Button
          className='add__to__cart'
          disabled={product.countInStock === 0}
          onClick={addToCartHandler}
        >
          {product.countInStock === 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
      </Card.Body>
    </Card>

    // <Card className='my-3 p-3 rounded home-card'>
    //   <Link to={`/product/${product._id}`}>
    //     <Card.Img src={product.image} variant='top' />
    //   </Link>

    //   <Card.Body>
    //     <Link to={`/product/${product._id}`}>
    //       <Card.Title as='div'>
    //         <strong>{product.name}</strong>
    //       </Card.Title>
    //     </Link>

    //     <Card.Text as='div'>
    //       <Rating
    //         value={product.rating}
    //         text={`${product.numReviews} reviews`}
    //       />
    //     </Card.Text>

    //     <Card.Text as='h3'>${product.price}</Card.Text>
    //   </Card.Body>
    //   <Button variant='success' className='card-btn'>
    //     <Link to={`/product/${product._id}`}>Details</Link>
    //   </Button>
    // </Card>
  );
};

export default Product;
