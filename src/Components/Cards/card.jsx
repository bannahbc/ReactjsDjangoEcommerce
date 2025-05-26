import React, { useState,useEffect } from "react";
import im from "../../Assets/Images/pew-nguyen-Ib0H1MGt5yw-unsplash.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { base_url } from "../../api";
import { Link } from "react-router-dom";
const Card = ({category=null}) => {
  const [products,setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const get_products = async () =>{
    try {
      const response = await fetch(`${base_url}/get_products${category ? `category/?category_id=${category}` : ''}`);
      const data = await response.json();
      console.log("Data",data);
      setIsLoading(false);
setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  useEffect(() => {
    get_products();
    console.log(products,"products");
  }, []);
  return (
    <card >
      <div className="cardTitle" >
        <h1 className="text-2xl font-bold text-center mt-4">Trending</h1>
        <p className="text-gray-600 text-center mb-4">Discover the latest trends in fashion and lifestyle</p>
          <hr className="mx-auto w-1/3 border-t-2 border-grey-500 rounded-full mb-10" />
      </div>
    <div className="card ml-4 mr-4 flex flex-wrap items-center justify-center my-10">
      {
        products.map((item)=>{
          return(

      <Link to={`/product?id=${item.id}`} class="max-w-xs mx-2 rounded-md overflow-hidden shadow-md hover:shadow-lg mb-4" key={item.id}>
    <div class="relative">
        <img class="w-full" src={`${base_url}${item.product_image1}`} alt="Product Image"/>
        {/* <img class="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image"/> */}
        <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">{Math.floor(item.product_discount)}% OFF
        </div>
    </div>
    <div class="p-4">
        <h3 class="text-lg font-medium mb-2 capitalize">{item.product_name}</h3>
        <p class="text-gray-600 text-sm mb-4">{item.product_description}</p>
        <div class="flex items-center justify-between">
            <span class="font-bold text-lg">${item.product_price}</span>
            <div className="buttons">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 mr-3 px-4 rounded">
        Buy Now
      </button>
            <button class="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
            </div>
        </div>
    </div>
</Link>
          )
        })
      }
            {/* <h1 className="mb-5 text-2xl">Trending</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {
            items.map((item)=>(
        <div className="cursor-pointer overflow-hidden w-60 mb-10">
      <img src={im} alt={item.title} className="w-full object-cover" />
      <div className="card-details">
      <h2 className="text-xl font-semibold mt-4">{item.title}Product Name</h2>
      <p className="text-green-600 mt-2">{item.description} Price</p>
      <p className="text-gray-600 font-light mt-2">{item.description} Product Description</p>
      </div>
    </div>
            ))
        }
    </div> */}
    </div>
    </card>
  );
}

export default Card;