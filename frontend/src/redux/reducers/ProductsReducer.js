const initState ={
    products: []
}

export const ProductsReducer = (state = initState,{type,payload}) =>{
    switch(type){
        case "SET_PRODUCTS":
            return {...state,products:payload};
            default:
                return state;
    }

    
}

export const selectProductReducer = (state={}, {type,payload})=> {
    switch(type){
        case 'SELECTED_PRODUCT':
            return {...state,...payload};
            default:
            return state;
    }
}