import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/Search/searchSlice"
import categoryReducer from "./features/ProductCategoryBox/categorySlice"
import homePageWidgetsReducer from "./features/HomePageFeaturesRequest";
import productReducer from "./features/ProductRequest"
 

const store = configureStore({
    reducer : {
       search : searchReducer,
       category : categoryReducer ,
       homePageWidgets : homePageWidgetsReducer,
       productReducer ,
    }
})


export default store ;