import React, { use } from "react";
import { base_url } from "../../api";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Category = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [category, setCategory] = React.useState([]);
    const get_category = async () => {
        try {
            const response = await fetch(`${base_url}/get_categorys`);
            const data = await response.json();
            console.log(data);
            setIsLoading(false);
            setCategory(data);
        } catch (error) {
            console.error('Error fetching category:', error);
        }
    }
    useEffect(() => {
        get_category();
        console.log(category,"category");
    }, []);
  return (
    <div className="category">
      <h1 className="text-2xl font-bold text-center mt-4">Categories</h1>
      <p className="text-gray-600 text-center mb-4">
        Discover the latest trends in fashion and lifestyle
      </p>
      <hr className="mx-auto w-1/3 border-t-2 border-grey-500 rounded-full mb-10" />
      <div className="categoryCards container mx-auto flex flex-wrap items-center justify-around my-10">
        {
            category.map((item)=>{
                return(
                    <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">

          <div class="p-4">
            <h5 class="mb-2 text-slate-800 text-xl font-semibold">
                {item.category_name}
            </h5>
            {/* <p class="text-slate-600 leading-normal font-light">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to Naviglio where you can enjoy the main night life
              in Barcelona.
            </p> */}

            <button 
              class="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
                <Link to={`/all_products?category_id=${item.id}`} className="text-white">
              Read more
                </Link>
            </button>
          </div>
        </div>
                )
            })
        }
      </div>
    </div>
  );
};
export default Category;
