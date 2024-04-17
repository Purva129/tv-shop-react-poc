import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { authActions } from "../store/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.userName);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="./products">
          TV STORE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {isAuth && (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="./products">
                Products
              </Nav.Link>
              <Nav.Link as={NavLink} to="./add-product">
                Add New Product
              </Nav.Link>
            </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                {userName}
                <Button
                  onClick={logoutHandler}
                  className="ms-2"
                  variant="outline-light"
                >
                  Logout
                </Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
