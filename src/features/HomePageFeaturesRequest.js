import { createSlice } from "@reduxjs/toolkit" ;

const initialState = {
    isLoading : false ,
    error : "" , 
    data : {},
    //not-yet , in-progress , arrive , fail
    situation : "not-yet",
}

const featureSlice = createSlice({
    name : "feature",
    initialState ,
    reducers : {
        setLoading(state){
            state.situation = "in-progress";
            state.isLoading = true ;
        },
        setError(state , action){
            state.situation = "fail"
            state.isLoading = false;
            state.error = action.payload ;
        },
        setData(state , action){
            state.situation = "arrive";
            state.isLoading = false;
            state.data = action.payload;
            console.log(action.payload)
        }
    }
})

export default featureSlice.reducer ;

export function fetchWidgetData(){
    return async function(dispatch){
        try {
            dispatch(featureSlice.actions.setLoading());
            const req = await fetch(`https://api.digikala.com/v2/`);
            if(!req.ok) throw new Error("something went wrong");
            const data = await req.json();
            dispatch(featureSlice.actions.setData(data.data.widgets));
            
        } catch (error) {
            dispatch(featureSlice.actions.setError(error.message));
        }
    }
}