import React, { useState, useEffect } from 'react';
import { base_url } from './api';
const GetProducts =()=>{
    const [products, setProducts] = useState([]);
    const get_products = async () => {
        try {
          const response = await fetch(`${base_url}/get_products`);
          const data = await response.json();
          console.log(data);
        //   setIsLoading(false);
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
      get_products();
      return products
}
export default GetProducts;