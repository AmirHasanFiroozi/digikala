import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   error : "",
   page : 0,
   data : [],
   isLoading : false ,
}

const commentSlice = createSlice({
    name : "comment",
    initialState ,
    reducers : {
        setLoading(state){
            state.error = "";
            state.isLoading = true ;
        },
        setError(state , action){
            state.isLoading = false;
            state.error = action.payload ;
        },
        setData:{
            prepare(page , data){
                return{
                    payload : {page , data}
                }
            },
            reducer(state,action){
                state.error = "";
                state.isLoading = false ;
                console.log(action.payload.data);
                state.data = [...state.data , ...action.payload.data] ;
                state.page = action.payload.page ;
            }
        },
        setDataOther(state){
            state.data = [];
            state.page = 0 ;
        }
    }
})

export const {setDataOther} = commentSlice.actions ;

export default commentSlice.reducer ;

export function fetchComment( id , page){
    return async function(dispatch){
        try {
            dispatch(commentSlice.actions.setLoading());
            const req = await fetch(`https://api.digikala.com/v1/rate-review/products/${id}/?page=${page}`);
            if(!req.ok) throw new Error("something went wrong");
            const data = await req.json();
            console.log(data);
            dispatch(commentSlice.actions.setData(page  , data.data.comments));
        } catch (error) {
            dispatch(commentSlice.actions.setError(error.message || error));
        }
    }
}