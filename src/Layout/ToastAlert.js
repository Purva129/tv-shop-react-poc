import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toastActions } from "../store/slices/toastSlice";

const ToastAlert = (props) => {
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(toastActions.close());
  };
  return (
    <ToastContainer position="middle-end" className="p-3">
      <Toast
        position="middle-end"
        show={props.alert.show}
        bg={props.alert.status === "error" ? "danger" : "success"}
        onClose={closeHandler}
      >
        <Toast.Header>
          <strong className="me-auto">{props.alert.title}</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{props.alert.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastAlert;
