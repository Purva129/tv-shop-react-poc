import { Button, Modal, ListGroup } from "react-bootstrap";
import ReactDOM from "react-dom";
import "./ViewProduct.css";
import CustomBadge from "../Layout/CustomBadge";

function ViewProduct(props) {
  const product = props.product;

  return ReactDOM.createPortal(
    <>
      <Modal show={props.show} onHide={props.closeModal}>
        <Modal.Header className="justify-content-center">
          <Modal.Title className="text-primary">PRODUCT DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup as="ul">
            <ListGroup.Item as="li">
              <strong>Name:</strong> {product.title}
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong>Description:</strong> {product.description}
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong>Features:</strong>
              <ul>
                <li>Resolution: {product.features.resolution}</li>
                <li>OperatingSystem: {product.features.operatingSystem}</li>
                <li>Sound: {product.features.sound}</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong>Price:</strong> <CustomBadge cost={product.price} />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong>Available Quantity: </strong>
              {product.quantity}
            </ListGroup.Item>
            Available Quantity
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          {props.children}
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>,
    document.querySelector(".viewProductDiv")
  );
}

export default ViewProduct;
