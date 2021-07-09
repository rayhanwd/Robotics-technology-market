const initState = {
    products: [],
    filteredItems: [],
    material: "",
}

export const ProductsReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case "SET_PRODUCTS":
            return { ...state, products: payload, filteredItems: payload };
        default:
            return state;
    }
}

export const selectProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case 'SELECTED_PRODUCT':
            return { ...state, ...payload };
        default:
            return state;
    }
}

export const filteredProduct = (state = [], { type,payload }) => {
    switch (type) {
        case 'FILTERED_PRODUCT':
            return {
                ...state,
                products:payload.products,
                material: payload.material,
                
            };
        default:
            return state;
    }
};