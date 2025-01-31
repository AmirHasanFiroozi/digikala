import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  isLoading: false,
  data: "",
  searchBox: false,
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
        state.isLoading = false;
        state.query = action.payload.query;
        state.data = action.payload.data;
      },
    },
    loading(state) {
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
  },
});

export default searchSlice.reducer;

export const {openSearchBox , closeSearchBox} = searchSlice.actions;

export function fetchGetSearchResult(query) {
  if (query === "") return;
  return async function (dispatch, setState) {
    dispatch(searchSlice.actions.loading());
    const res = await fetch(
      `https://api.digikala.com/v1/autocomplete/?q=${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log(res);
    const data = await res.json();
    console.log(data);
    dispatch(searchSlice.actions.getSearchResult(query, data));
  };
}
