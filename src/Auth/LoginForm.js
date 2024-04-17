import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/slices/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isAuth = useSelector(state => state.auth.isAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const loginHandler = (formData) => {
    // event.preventDefault();
    dispatch(authActions.login(formData.email));
    navigate("/products");
  };

  // if(isAuth) {
  // }

  return (
    <Card
      className="text-center"
      text="white"
      bg="dark"
      style={{ width: "20rem", margin: "6rem auto" }}
    >
      <Card.Header>LOGIN</Card.Header>
      <Card.Body>
        {/* <Card.Text> */}
        <Form onSubmit={handleSubmit(loginHandler)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              isInvalid={!!errors.email}
              {...register("email", {
                required: "Email is mandatory.",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Please enter valid email.",
                },
              })}
              placeholder="Enter email"
            />
            {errors.email && (
              <Form.Control.Feedback type="invalid">
                {errors.email.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              isInvalid={!!errors.password}
              placeholder="Password"
              {...register("password", {
                required: "Password is mandatory.",
                minLength: {
                  value: 6,
                  message: "Please enter minimum 6 charater."
                }
              })}
            />
            {errors.password && (
              <Form.Control.Feedback type="invalid">
                {errors.password.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        {/* </Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
