import { Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import React, { useState } from "react";
import ViewProduct from "./ViewProduct";
import CustomBadge from "../Layout/CustomBadge";
import { useDispatch } from "react-redux";
import { delProduct } from "./productOperations";

const ProductCard = (props) => {
  const product = props.product;
  const dispatch = useDispatch();
  const [isDelete, setIsDelete] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setIsDelete(false);
  };
  const handleShow = () => setShow(true);

  const handleIsDelete = () => {
    setIsDelete(true);
    setShow(true);
  };

  const onDelete = () => {
    dispatch(delProduct(product.id));
  };

  return (
    <React.Fragment>
      {show && (
        <ViewProduct
          closeModal={handleClose}
          product={props.product}
          show={show}
        >
          {isDelete && (
            <>
              <Col className="text-danger fw-bold">
                Are you sure you want to delete this product?
              </Col>
              <Button variant="danger" onClick={onDelete}>
                Delete
              </Button>
            </>
          )}
          {/* {isDelete && <Button varient="danger" onClick={onDelete}>Delete</Button>} */}
        </ViewProduct>
      )}
      <Card bg="dark" text="white" className="product-card">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Row style={{ alignItems: "center" }}>
            <Col>{product.title}</Col>
            <Col className="text-center">
              <CustomBadge cost={product.price} />
            </Col>
            <Col>
              <Button
                variant="primary"
                className="me-2"
                onClick={handleShow}
                type="button"
              >
                View
              </Button>
              <Button
                variant="secondary"
                className="me-2"
                as={Link}
                to={`/edit-product/${product.id}`}
              >
                Edit
              </Button>
              <Button variant="danger" onClick={handleIsDelete}>
                Delete
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
    // <div className="card card-border-left">
    //   <div className="card-body">
    //     <div className="d-flex justify-content-between align-items-center">
    //       <div className="d-flex flex-column text-start">
    //         <h5 className="category-color">{title}</h5>
    //         <div className="date-font">{description}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductCard;
