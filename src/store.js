import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/Search/searchSlice"
import categoryReducer from "./features/ProductCategoryBox/categorySlice"
import homePageWidgetsReducer from "./features/HomePageFeaturesRequest";
import productReducer from "./features/ProductRequest";
import theProductReducer from "./features/Products/TheProduct/productSlice";
import commentReducer from "./features/Products/TheProduct/commentSlice";
 

const store = configureStore({
    reducer : {
       search : searchReducer,
       category : categoryReducer ,
       homePageWidgets : homePageWidgetsReducer,
       productReducer ,
       theProductReducer ,
       commentReducer ,
    }
})


export default store ;