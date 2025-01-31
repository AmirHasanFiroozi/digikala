import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/Search/searchSlice"
import categoryReducer from "./features/ProductCategoryBox/categorySlice"
import homePageSliderReducer from "./features/Slider/sliderSlice";
import homePageWidgetsReducer from "./features/HomePageFeaturesRequest";
 

const store = configureStore({
    reducer : {
       search : searchReducer,
       category : categoryReducer ,
       homePageSlider : homePageSliderReducer ,
       homePageWidgets : homePageWidgetsReducer,
    }
})


export default store ;