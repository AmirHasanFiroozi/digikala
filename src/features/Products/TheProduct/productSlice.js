import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    error : "",
    isLoading : false,
    data : {},
}

const theProductSlice = createSlice({
    name : "theProduct",
    initialState , 
    reducers : {
        setLoading(state){
            state.error = "";
            state.isLoading = true ;
        },
        setError(state , action){
            state.isLoading = false ;
            state.error = action.payload ;
        },
        setData(state , action){
            state.isLoading = false ;
            state.error = "";
            state.data = action.payload ;
        },
        clearData(state){
            state.data = {};
        }
    }
})

export default theProductSlice.reducer ;

export function fetchTheProduct(id){
    return async function(dispatch) {
        dispatch(theProductSlice.actions.clearData());
        try {
            dispatch(theProductSlice.actions.setLoading());
            const req = await fetch(`https://api.digikala.com/v2/product/${id}/`);
            const data = await req.json();
            dispatch(theProductSlice.actions.setData(data.data.product));
        } catch (error) {
            dispatch(theProductSlice.actions.setError(error.message || error));
        }
    }
}