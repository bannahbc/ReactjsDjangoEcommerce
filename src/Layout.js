import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Card from "./Components/Cards/card";
import { get_product } from "./api";
import GetProducts from "./ApiCalling";
import Footer from "./Components/Footer/footer";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
const Layout = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">

      <Outlet key={location.pathname}/>
      <div className="footer" id='footer'>
        <Footer/>
      </div>
      </AnimatePresence>
    </div>
  );
}
export default Layout;


// const ProductsLayout = ()=>{
//     const [products, setProducts] = React.useState([]);
//     useEffect(() => {
//         const result =  get_products();
//         setProducts(result);
//     }, []);
//     return (
//         <div>
//             <div className="flex flex-col items-center justify-center h-screen">
//                 <h1 className="text-2xl font-bold">Products</h1>
//                 <p className="text-gray-500">List of products will be displayed here.</p>
//                 <Card items={get_products}/>
//             </div>
//         </div>
//     );
// }
// export { ProductsLayout };