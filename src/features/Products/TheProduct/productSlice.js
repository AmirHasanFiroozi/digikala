import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    error : "",
    isLoading : false,
    data : {},
    color : "",
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
            state.color = state.data.colors[0];
        },
        clearData(state){
            state.data = {};
        },
        setColor(state,action){
            state.color = action.payload;
        }
    }
})

export const {setColor} = theProductSlice.actions ;

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