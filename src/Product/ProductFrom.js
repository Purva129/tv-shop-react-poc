import { Button, Form, Row, Col, Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postProduct } from "./productOperations";
import React, { useEffect } from "react";
import ToastAlert from "../Layout/ToastAlert";

const ProductForm = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.toast);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const productSubmitHandler = (formData) => {
    // event.preventDefault();
    dispatch(postProduct(formData));
  };

  useEffect(() => {
    if (notification.status === "success") {
      resetHandler();
    }
  }, [notification]);

  const resetHandler = () => {
    reset();
  };

  return (
    <React.Fragment>
      {notification.show && <ToastAlert alert={notification} />}
      <Container>
        <h3 className="mt-5 text-primary  text-center">ADD NEW PRODUCT</h3>
        <Card
          // className="text-center"
          text="white"
          bg="dark"
          style={{ width: "40rem", margin: "2rem auto" }}
        >
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Form onSubmit={handleSubmit(productSubmitHandler)}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label column="sm">Product Name</Form.Label>
                <Form.Control
                  type="text"
                  isInvalid={!!errors.title}
                  {...register("title", {
                    required: "Product name is mandatory.",
                  })}
                  placeholder="Enter product name"
                />
                {errors.title && (
                  <Form.Control.Feedback type="invalid">
                    {errors.title.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label column="sm">Product Description</Form.Label>
                <Form.Control
                  type="text"
                  isInvalid={!!errors.description}
                  {...register("description", {
                    required: "Description is mandatory.",
                  })}
                  placeholder="Enter description"
                />
                {errors.description && (
                  <Form.Control.Feedback type="invalid">
                    {errors.description.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="price">
                  <Form.Label column="sm">Price</Form.Label>
                  <Form.Control
                    isInvalid={!!errors.price}
                    type="number"
                    {...register("price", { required: "Price is mandatory." })}
                    placeholder="Enter price"
                  />
                  {errors.price && (
                    <Form.Control.Feedback type="invalid">
                      {errors.price.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="quantity">
                  <Form.Label column="sm">Available Quantity</Form.Label>
                  <Form.Control
                    isInvalid={!!errors.quantity}
                    type="number"
                    {...register("quantity", {
                      required: "Quantity is mandatory.",
                    })}
                    placeholder="Enter quantity"
                  />
                  {errors.quantity && (
                    <Form.Control.Feedback type="invalid">
                      {errors.quantity.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="resolution">
                  <Form.Label column="sm">Resolution</Form.Label>
                  <Form.Select
                    isInvalid={!!errors.features?.resolution}
                    {...register("features.resolution", {
                      required: "Resolution is mandatory.",
                    })}
                  >
                    <option value="">-Select-</option>
                    <option value="1366 x 768">1366 x 768</option>
                    <option value="1366 x 768">1366 x 768</option>
                    <option value="1920 x 1080">1920 x 1080</option>
                  </Form.Select>
                  {errors.features?.resolution && (
                    <Form.Control.Feedback type="invalid">
                      {errors.features?.resolution.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="sound">
                  <Form.Label column="sm">Sound</Form.Label>
                  <Form.Select
                    isInvalid={!!errors.features?.sound}
                    {...register("features.sound", {
                      required: "Sound is mandatory.",
                    })}
                  >
                    <option value="">-Select-</option>
                    <option value="10 Watt">10 Watts, Dolby Audio</option>
                    <option value="24 Watt">24 Watt</option>
                    <option value="30 Watt">30 Watt</option>
                  </Form.Select>
                  {errors.features?.sound && (
                    <Form.Control.Feedback type="invalid">
                      {errors.features?.sound.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Row>

              <Form.Group controlId="operatingSystem">
                <Form.Label column="sm">Operating System</Form.Label>
                <Form.Select
                  isInvalid={!!errors.features?.operatingSystem}
                  {...register("features.operatingSystem", {
                    required: "Operating System is mandatory.",
                  })}
                >
                  <option value="">-Select-</option>
                  <option value="WebOS">
                    WebOS with Unlimited OTT App Support
                  </option>
                  <option value="Android">
                    Android with Unlimited OTT App Support
                  </option>
                </Form.Select>
                {errors.features?.operatingSystem && (
                  <Form.Control.Feedback type="invalid">
                    {errors.features?.operatingSystem.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <br />
              <div className="d-flex justify-content-between">
                <Button variant="danger" onClick={resetHandler} type="button">
                  Reset
                </Button>
                <Button variant="primary" type="submit">
                  Add Product
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default ProductForm;
