import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredProductAction } from './../../../redux/action/actions';

const Filter = () => {
    const [filterText, setFilterText] = useState();
    const products = useSelector((state) => state.GetALLProduct.products)
    const dispatch = useDispatch();

   dispatch(filteredProductAction(
            products,
            filterText
          ),'')
    

    console.log(filterText)

    return (
        <div className="relative mt-10 ml-36 flex items-center content-center">
            <label for="name" className="mr-5 leading-7 text-sm text-gray-600">Filter by material</label>
            <input onChange={(e) => setFilterText(e.target.value)} type="text" id="name" name="name" placeholder="type a material" className="w-56 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
    );
};

export default Filter;