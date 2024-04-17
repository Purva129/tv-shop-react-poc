import { productActions } from "../store/slices/productSlice";
import { toastActions } from "../store/slices/toastSlice";
import { createProduct, deleteProduct, editProduct, getProducts } from "./productApi";

export const getProductList = () => {
  return (dispatch) => {
    dispatch(productActions.productsLoading(true));

    getProducts()
      .then((res) => {
        if (res.status === 200) {
          let products = [];
          for (const key in res.data) {
            products.push({
              ...res.data[key],
              id: key,
            });
          }
          dispatch(productActions.retrieveProducts(products));
        }
      })
      .catch((err) => {
        dispatch(productActions.productsLoading(false));
        dispatch(
          toastActions.showToast({
            title: "PRODUCT LIST",
            message: "Fetching product list failed!.",
            status: "error",
          })
        );
      });
  };
};

export const postProduct = (product) => {
  return (dispatch) => {
    createProduct(product)
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            toastActions.showToast({
              title: "ADD NEW PRODUCT",
              message: "Product added successfully!.",
              status: "success",
            })
          );
        }
      })
      .catch((err) => {
        dispatch(
          toastActions.showToast({
            title: "ADD NEW PRODUCT",
            message: "Failed to add new product!.",
            status: "error",
          })
        );
      });
  };
};

export const putProduct = (product, id) => {
  return (dispatch) => {
    editProduct(product, id)
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            toastActions.showToast({
              title: "UPDATE PRODUCT",
              message: "Product updated successfully!.",
              status: "success",
            })
          );
        }
      })
      .catch((err) => {
        dispatch(
          toastActions.showToast({
            title: "UPDATE PRODUCT",
            message: "Failed to update product!.",
            status: "error",
          })
        );
      });
  };
};

export const delProduct = (id) => {
  return (dispatch) => {
    deleteProduct(id)
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            toastActions.showToast({
              title: "DELETE PRODUCT",
              message: "Product deleted successfully!.",
              status: "success",
            })
          );
          dispatch(getProductList())
        }
      })
      .catch((err) => {
        dispatch(
          toastActions.showToast({
            title: "DELETE PRODUCT",
            message: "Failed to delete product!.",
            status: "error",
          })
        );
      });
  };
};
