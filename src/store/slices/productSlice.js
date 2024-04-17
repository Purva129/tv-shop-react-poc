import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProduct(state, action) {
      return {
        ...state,
      };
    },
    retrieveProducts(state, action) {
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    },
    productsLoading(state, action) {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
    updateProduct(state, action) {
      const selectedProduct = state.products.find(
        (product) => product.id === action.payload
      );
      if (selectedProduct) {
        return {
          ...state,
          selectedProduct: selectedProduct,
        };
      }
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
