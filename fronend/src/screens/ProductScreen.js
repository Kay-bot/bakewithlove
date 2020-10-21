import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  const {
    countInStock,
    description,
    image,
    name,
    numReviews,
    price,
    rating,
  } = product;
  return (
    <>
      <Link className="btn btn-primary my-3" to="/">
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={image} alt={name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup className="list-group-mine" variant="flush">
            <ListGroup.Item>
              <h3>{name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={rating} text={`${numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${price}</ListGroup.Item>
            <ListGroup.Item>Description: {description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Col>Price:</Col>
                <Col>
                  <strong>${price}</strong>
                </Col>
              </ListGroupItem>

              <ListGroupItem>
                <Col>Status:</Col>
                <Col>
                  <strong>
                    {countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </strong>
                </Col>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
