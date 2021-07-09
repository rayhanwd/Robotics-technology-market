import React from 'react';
import { useSelector } from 'react-redux';
import { BsDash, BsPlus, BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import currencyFormatter from "currency-formatter";
const CartList = () => {

    const products = useSelector(state => state.AddToCart.products);
    const { totalQuantities, totalPrice } = useSelector(state => state.AddToCart);

    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <div>
                    {products.length > 0 ? <h2>Your selected products</h2> :
                        <h2>You have no selected products</h2>
                    }
                </div>
                {
                    products.map((product =>
                        <div className="flex m-2">
                            <h3>{product.name}</h3>
                            <h3 className="ml-3">{currencyFormatter.format(product.price , { code: 'THB' })}</h3>

                            <span className="ml-3 mt-1" onClick={() => dispatch({ type: 'DEC', payload: product.name })}><BsDash /></span>
                            {
                                product.quantity > 5 ? <span className="ml-3 text-red-700"> {product.quantity} You cannot order more than 5 at a time</span> : <span className="ml-3 quantity">{product.quantity}</span>
                            }
                            <span className="mt-1 ml-3" onClick={() => dispatch({ type: 'INC', payload: product.name })}><BsPlus /></span>

                            <span className="ml-3" onClick={() => dispatch({ type: 'REMOVE', payload: product.name })}><BsFillTrashFill /></span>
                        </div>
                    ))

                }

            </div>
            {totalPrice ?
                <span>Total price: {currencyFormatter.format(totalPrice , { code: 'THB' })}</span> : <span></span>
            }
        </div>
    );
};

export default CartList;