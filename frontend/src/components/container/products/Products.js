import React, { useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { SetProducts } from '../../../redux/action/actions';
import CartList from './../cart/CartList';

const Products = () => {
  const Products = useSelector((state) => state.GetALLProduct.products)
  const FilteredProduct = useSelector((state) => state.FilteredProduct.products)
  console.log(FilteredProduct)
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
        <div class="flex">
          <div class="flex flex-wrap -m-4 w-4/5">

            {FilteredProduct===undefined ?
            Products.map(product => <Product key={product.name} items={product}></Product>)
            
              :FilteredProduct.map(product => <Product key={product.name} items={product}></Product>)
            }


          </div>
          <div className="flex w-1/5">
            <CartList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;