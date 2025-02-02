import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  isLoading: false,
  data: "",
  searchBox: false,
  error : "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getSearchResult: {
      prepare(query, data) {
        return {
          payload: { query, data },
        };
      },
      reducer(state, action) {
        state.error = "";
        state.isLoading = false;
        state.query = action.payload.query;
        state.data = action.payload.data;
      },
    },
    loading(state) {
      state.error = "";
      state.isLoading = true;
    },
    openSearchBox(state) {
      state.searchBox = true;
      document.body.classList.add("lock-page")
    },
    closeSearchBox(state) {
      state.searchBox = false;
      document.body.classList.remove("lock-page")
    },
    setError(state,action){
      state.isLoading = false;
      state.error = action.payload ;
    }
  },
});

export default searchSlice.reducer;

export const {openSearchBox , closeSearchBox} = searchSlice.actions;

export function fetchGetSearchResult(query) {
  return async function (dispatch) {
    try {
      dispatch(searchSlice.actions.loading());
      const res = await fetch(`https://api.digikala.com/v1/autocomplete/?q=${query}`);
      const data = await res.json();
      dispatch(searchSlice.actions.getSearchResult(query, data.data));
    } catch (error) {
      dispatch(searchSlice.actions.setError(error.message || error));
    }
  };
}
