export const SetProducts = (products)=>{
    return {
        type: 'SET_PRODUCTS',
        payload: products,
    }
};

export const selectedProduct = (product)=> {
    return {
        type: 'SELECTED_PRODUCT',
        payload:product,
    }
};

export const filteredProductAction = (products, material) =>{
    return{
      type: 'FILTERED_PRODUCT',
      payload: {
        material: material,
        products:
        material === ""
            ? products
            : products.filter(
                (x) => x.material.indexOf(material) >= 0
              ),
      },
    };
  };