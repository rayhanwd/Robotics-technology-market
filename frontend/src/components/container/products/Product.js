import React, { useState } from 'react';
import currencyFormatter from "currency-formatter";
import { useDispatch } from "react-redux";

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const { name,
        image,
        price,
        stock,
        createdAt,
        material } = props.items;
        const product =props.items;
    return (
        <div class="p-4 lg:w-1/3 md:w-1/2">
            <div class="h-full flex flex-col bg-gray-100 items-center rounded">
                <img style={{width:'150px',height:'150px'}} alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={image} />
                <div class="w-full p-5">
                    <h3 class="text-gray-500 mb-3">{name}</h3>
                    <h4 class="text-gray-500 mb-3">Material type: {material}</h4>
                    <h4 class="text-gray-500 mb-3">{currencyFormatter.format(price, { code: 'THB' })}</h4>
                    <span class="block">
                        <h4>{new Date(createdAt).toDateString('dd/mm/yyyy')}</h4>
                        <h3>Available stock: {stock}</h3>
                        <button disabled={stock === 0} style={stock === 0 ? { cursor: 'not-allowed' } : { cursor: 'pointer' }} onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })} className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">Add cart</button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Product;