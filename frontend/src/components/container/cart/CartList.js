import React from 'react';
import { useSelector } from 'react-redux';
import {BsDash, BsPlus} from "react-icons/bs";
import { useDispatch } from 'react-redux';

const CartList = () => {

    const products= useSelector(state => state.AddToCart.products);
    const {totalQuantities,totalPrice} = useSelector(state => state.AddToCart);

    const dispatch = useDispatch();
    return (
        <div>
        <div>

           {
               products===undefined ? <h2>anvd</h2>:
            
                products.map((product =>
                      <div>
                          <h3>{product.name}</h3>
                          <h3>{product.price}</h3>
                          
                          <span className="dec" onClick={() => dispatch({ type: 'DEC', payload: product.name })}><BsDash /></span>
                          {
                            product.quantity > 5? <span className="text-red-700"> {product.quantity} You cannot order more than 5 at a time</span>:<span className="quantity">{product.quantity}</span>
                          }
                          <span className="inc" onClick={() => dispatch({ type: 'INC', payload: product.name })}><BsPlus /></span>
  
                          
                      </div>
                  )) 
                 
           }
        </div>
        <span>{totalPrice}</span>
        </div>
    );
};

export default CartList;