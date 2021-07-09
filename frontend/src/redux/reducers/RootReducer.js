import { combineReducers} from "redux";
import CartReducer from "./CartReducers";
import { filteredProduct, ProductsReducer } from "./ProductsReducer";


const reducer = combineReducers({
    GetALLProduct: ProductsReducer, 
    AddToCart:CartReducer,
    FilteredProduct: filteredProduct,
})

export default reducer;