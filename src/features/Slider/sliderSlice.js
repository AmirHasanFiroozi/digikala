import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    slideData : [],
    loading : false ,
    errorMessage : "" ,
}

const sliderSlice = createSlice({
    name: "homePageSlider",
    initialState,
    reducers : {
        loading(state){
             state.loading = true ;
        },
        setSlideData(state , action){
            state.errorMessage = "" ;
            state.loading = false ;
            state.slideData = action.payload ;
        },
        setError(state , action){
            state.errorMessage = action.payload ;
        }
    }
})

export default sliderSlice.reducer

export function fetchSlider() {
    return async function(dispatch , setState) {
        try {
            dispatch(sliderSlice.actions.loading());
            const req = await fetch('http://localhost:8000/data');
            if(!req.ok) throw new Error("something went wrong")
            const data = await req.json();
            dispatch(sliderSlice.actions.setSlideData(data.widgets.filter(widget => widget.type === "full_slider")[0].data));
        } catch (error) {
            dispatch(sliderSlice.actions.setError(error.message));
        }
    }
}