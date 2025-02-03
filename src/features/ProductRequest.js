import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: "",
  isLoading: false,
  jetDelivery: "",
  shipBySeller: "",
  sellingStock: "",
  page: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoading(state) {
      state.error = "";
      state.isLoading = true;
    },
    setError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setData: {
      prepare(data, page, jetDelivery, shipBySeller, sellingStock) {
        return {
          payload: { data, page, jetDelivery, shipBySeller, sellingStock },
        };
      },
      reducer(state, action) {
        state.isLoading = false;
        if(!!action.payload.jetDelivery !== state.jetDelivery){
            state.date = [];
        }
        if(!!action.payload.sellingStock !== state.sellingStock){
            state.data = []
        }
        if(!!action.payload.shipBySeller !== state.shipBySeller){
            state.data = []
        }
        state.data =
          state.page === action.payload.page
            ? action.payload.data.products
            : [...state.data, ...action.payload.data.products];
        state.jetDelivery = !!action.payload.jetDelivery ;
        state.page = action.payload.page;
        state.shipBySeller = !!action.payload.shipBySeller;
        state.sellingStock = !!action.payload.sellingStock;
      },
    },
  },
});

export default productSlice.reducer;

export function requestProducts(
  page,
  jetDelivery = "",
  shipBySeller = "",
  sellingStock = "",
) {
  return async function (dispatch) {
    try {
      dispatch(productSlice.actions.setLoading());
      const req = await fetch(
        `https://api.digikala.com/v1/search/?${sellingStock === "sellingStock" ? "has_selling_stock=1" : ""}${jetDelivery === "jetDelivery" ? "has_jet_delivery=1" : ""}${shipBySeller === "shipBySeller" ? "has_ship_by_seller=1" : ""}q=%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84&page=${page}`,
      );
      const data = await req.json();
      dispatch(
        productSlice.actions.setData(
          data.data,
          page,
          jetDelivery,
          shipBySeller,
          sellingStock,
        ),
      );
    } catch (error) {
      dispatch(productSlice.actions.setError(error.message || error));
    }
  };
}
