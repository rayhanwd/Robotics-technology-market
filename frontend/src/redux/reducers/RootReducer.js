import { combineReducers} from "redux";
import CartReducer from "./CartReducers";
import { ProductsReducer } from "./ProductsReducer";

const reducer = combineReducers({
    GetALLProduct: ProductsReducer, 
    AddToCart:CartReducer
})

export default reducer;