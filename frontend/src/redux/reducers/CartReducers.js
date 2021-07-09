const initState = {
    products: [
        
    ],
    totalPrice: 0,
    totalQuantities: 0
}

const CartReducer = (state = initState, action) => {
    let findPro;
    let index;
    switch(action.type){
        case 'ADD_TO_CART':
        const {product,quantity}= action.payload;
        const check = state.products.find(pd => pd.name === product.name);
       
        if(check){
            return state;
        } else {
            const TotalPrice = parseFloat(state.totalPrice) + parseFloat(product.price * quantity);
            const TotalQuantities = parseFloat(state.totalQuantities) + quantity;
            product.quantity = quantity;
            return {
                ...state, products: [...state.products, product],totalPrice: TotalPrice.toFixed(2), totalQuantities: TotalQuantities 
            }
            
        }
       
        case 'INC':
          findPro = state.products.find(product => product.name === action.payload);
          index = state.products.findIndex(product => product.name === action.payload);
          findPro.quantity += 1;
          state.products[index] = findPro;
          const TotalPrice= parseFloat(state.totalPrice) + parseFloat(findPro.price);
          const TotalQuantities = parseFloat(state.totalQuantities)+1;
          return {
              ...state,
              totalPrice:Math.round(TotalPrice).toFixed(2) , totalQuantities: TotalQuantities
          }
        case "DEC":
        findPro = state.products.find(product => product.name === action.payload);
        index = state.products.findIndex(product => product.name === action.payload);
        if(findPro.quantity > 1){
           findPro.quantity -= 1;
           state.products[index] = findPro;
           const TotalPrice= parseFloat(state.totalPrice) - parseFloat(findPro.price);
          const TotalQuantities = parseFloat(state.totalQuantities)-1;
           return {
               ...state,
               totalPrice:TotalPrice.toFixed(2) , totalQuantities: TotalQuantities
           }
        } else {
            return state;
        }
        case 'REMOVE':
        findPro = state.products.find(product => product.name === action.payload);
        const filtered = state.products.filter(product => product.name !== action.payload);
        return {
            ...state,
            products: filtered,
            totalPrice: state.totalPrice - findPro.price * findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
        }
        default: 
        return state;
    }

}
export default CartReducer;