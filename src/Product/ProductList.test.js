import { render } from "@testing-library/react";
import axios from "axios";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import ProductList from "./ProductList";
jest.mock("axios");
afterEach(() => {
  axios.get.mockClear();
});

const products = {
  "1":{
    id: 1,
    description: "LG Smart TV",
    features: {
      operatingSystem: "WebOS",
      resolution: "1366 x 768",
      sound: "10 Watt",
    },
    id: "-N_ISYAOoJb129Bfh0sv",
    price: "13990.00",
    quantity: "35",
    title: "LG TV",
  },
  "2":{
    id: 2,
    description: "Xiaomi smart home TV",
    features: {
      operatingSystem: "Android",
      resolution: "1366 x 768",
      sound: "24 Watt",
    },
    price: "11990",
    quantity: "500",
    title: "Xiaomi TV",
  },
  "3":{
    id: 3,
    description: "Enjoy HD TV in Digital era.",
    features: {
      operatingSystem: "Android",
      resolution: "1920 x 1080",
      sound: "30 Watt",
    },
    price: "11990.00",
    quantity: "875",
    title: "Samsung TV",
  },
};

jest.mock("axios", () => {
  return {
    get: jest.fn().mockResolvedValue({ data: [] }),
    create: jest.fn(function () {
      return this;
    }),
  };
});

test("product list", async () => {
  const initialState = {
    products: [],
    isLoading: false,
    selectedProduct: null,
  };
  const initialToast = {
    show: false,
    title: "",
    message: "",
    status: "",
  };
  // const mockStore = configureStore();
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let store;
  store = mockStore({ product: initialState, toast: initialToast });
  axios.get.mockResolvedValueOnce({ status: 200, data: products });
  render(
    <Provider store={store}>
      <ProductList />
    </Provider>
  );

  expect(axios.get).toHaveBeenCalledTimes(1);
    console.log(store.getState().product)
  // const productList = await waitFor(() => screen.findAllByTestId("productId"), {
  //   timeout: 4000,
  // });

  // expect(productList).toHaveLength(3);
});
