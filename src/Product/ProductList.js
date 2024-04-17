import { Container, Alert, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductList } from "./productOperations";
import ToastAlert from "../Layout/ToastAlert";
import React from "react";
const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const notification = useSelector((state) => state.toast);
  const isLoading = useSelector((state) => state.product.isLoading);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <Container>
      {notification.show && <ToastAlert alert={notification} />}
      <h3 className="mt-5 text-primary text-center">PRODUCT LIST</h3>
      <Row xs={1} md={3} className="g-4">
        <Col md={{ span: 8, offset: 2 }}>
          {isLoading && (
            <Alert variant="primary" className="mt-4">
              Please wait...
            </Alert>
          )}
          {products?.length === 0 && !isLoading && (
            <Alert variant="danger" className="mt-4">
              Products are not available... Please add new product!
            </Alert>
          )}
          {products?.length > 0 &&
            products.map((product) => {
              return <ProductCard key={product.id} data-testid="productId" product={product} />;
            })}
        </Col>
      </Row>
    </Container>
  );
};
export default ProductList;
