import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../api";
import { SomethingWentWrong } from "../../Components/Error/error";
import Card from "../../Components/Cards/card";
import { useParams, useSearchParams } from "react-router-dom";
import get_image_address from "../../commonFunction";


const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
  );
  const [productData,setProductData] = useState(null);
  const [error,setError] = useState(null)

  // const thumbnails = [
  //   "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  //   "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  //   "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  //   "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  // ];
  const thumbnails = [
    productData.product_image1,
    productData.product_image2,
    productData.product_image3,
    productData.product_image4,
  ]
  useEffect(()=>{
    const get_product = async () => {
    try {
const response = await axios.get(`${base_url}/get_product/${id}`);
      console.log("loj",response.data);
      setProductData(response.data);
      console.log("productData",productData);
    } catch (err) {
      setError(err);
      console.log(err,"hello");
    }
  };
    get_product()
  },[])


  return (
    <div className="bg-gray-100">
      { productData ?
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Product Images */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={get_image_address(productData.product_image1)}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {thumbnails.map((src, index) => (
                <img
                  key={index}
                  src={get_image_address(src)}
                  alt={`Thumbnail ${index + 1}`}
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => setMainImage(src)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 capitalize">
              {productData.product_name}
            </h2>
            <p className="text-gray-600 mb-4">{productData.product_brand}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${productData.product_discount_price}</span>
              <span className="text-gray-500 line-through">${productData.product_price}</span>
              <span className="text-gray-500 line-through">${productData.product_image1}</span>
            </div>
                
            {/* Star Ratings */}
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 
                     5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 
                     3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 
                     1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 
                     2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>

            <p className="text-gray-700 mb-6">
              {productData.product_description}
            </p>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue="1"
                className="w-16 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mb-6">
              <button className="bg-indigo-600 flex items-center justify-center gap-2 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 
                     1.087.835l.383 1.437M7.5 14.25a3 
                     3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 
                     2.1-4.684 2.924-7.138a60.114 60.114 
                     0 0 0-16.536-1.84M7.5 14.25 
                     5.106 5.272M6 20.25a.75.75 0 1 1-1.5 
                     0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 
                     0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>

              <button className="bg-gray-200 flex items-center justify-center gap-2 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 
                     0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 
                     3.75 3 5.765 3 8.25c0 7.22 9 12 9 
                     12s9-4.78 9-12Z"
                  />
                </svg>
                Wishlist
              </button>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Industry-leading noise cancellation</li>
                <li>30-hour battery life</li>
                <li>Touch sensor controls</li>
                <li>Speak-to-chat technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      :
      <div className="somethingwent">
          <SomethingWentWrong errorCode="404" message="Product Not Found"  />
          {/* <SomethingWentWrong/> */}
      </div>
      }
    </div>
  );
};

export default ProductDetail;



const AllProducts = ()=>{
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('category_id');
  console.log(categoryId,"categoryId");
  return(
    <div>
      <Card category={categoryId}/>
    </div>
  )
}
export { AllProducts };
