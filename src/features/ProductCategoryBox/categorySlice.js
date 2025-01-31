import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    category : "phone",
    megaMenu : false ,
}

const categorySlice = createSlice({
  name : "category",
  initialState,
  reducers : {
    setCategory(state,action){
        state.category = action.payload ;
    },
    openMegaMenu(state){
        state.megaMenu = true ;
    },
    closeMegaMenu(state){
        state.megaMenu = false ;
    }
  }
})

export const {setCategory , openMegaMenu , closeMegaMenu} = categorySlice.actions ;

export default categorySlice.reducer ;