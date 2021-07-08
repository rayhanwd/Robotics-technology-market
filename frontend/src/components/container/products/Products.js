import React, { useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { SetProducts } from '../../../redux/action/actions';
import CartList from './../cart/CartList';


const Products = () => {
  const Products = useSelector((state) => state.GetALLProduct.products)
  console.log(Products)
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('http://localhost:8000/api/robots')
      .then(res => {
        dispatch(SetProducts(res.data.data));
      })
      .catch(error => console.log((error.message)))
  }, [])

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <div class="flex">
          <div class="flex flex-wrap -m-4 w-4/5">
            {
              Products.map(product => <Product key={product.name} items={product}></Product>)
            }

          </div>
          <div class="flex w-1/5">
           <CartList/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;