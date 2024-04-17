import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./Auth/LoginForm";
import ProtectedRoute from "./Auth/protectedRoute";
import Header from "./Layout/Header";
import EditProductForm from "./Product/EditProductForm";
import ProductForm from "./Product/ProductFrom";
import ProductList from "./Product/ProductList";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.userName);

  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/products"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <ProductList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-product"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <ProductForm />
              </ProtectedRoute>
            }
          />
          <Route />

          <Route
            path="/edit-product/:id"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <EditProductForm />
              </ProtectedRoute>
            }
          />
          <Route />
        </Routes>
      </BrowserRouter>
      {/* {!isAuth && <LoginForm />}
      <ProductForm /> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
