import { createSlice } from "@reduxjs/toolkit";

const cart = localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : [];

const initialState = {
  cart: cart,
  // weHaveInCart
  cartElementSituation: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
        state.cartElementSituation = "";
      if (state.cart.length !== 0) {
        state.cart.forEach((cartElement) => {
          if (cartElement.id === action.payload.id) {
            cartElement.number = action.payload.number;
            state.cartElementSituation = "weHaveInElement";
            return;
          }
        });
      }
      if(state.cartElementSituation !== "weHaveInElement"){
        state.cart =[...state.cart , action.payload];
      }else{
        state.cart = [...state.cart];
      }
      localStorage.setItem("cart" , JSON.stringify(state.cart));
    },
    removeElementFromCart(state, action) {
      state.cart = state.cart.filter(
        (cartElement) => cartElement.id !== action.payload,
      );
      localStorage.setItem("cart" , JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeElementFromCart } = cartSlice.actions;

export default cartSlice.reducer;
