import react from 'react';
import Navbar from '../../Components/Navbar/navbar.jsx';
import Banner from '../../Components/Banner/banner.jsx';
import Footer from '../../Components/Footer/footer.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faClock,faTruck,faCreditCard } from '@fortawesome/free-solid-svg-icons';

import { useEffect } from 'react';
import './home.css';

import Card from '../../Components/Cards/card.jsx';
import footer from '../../Components/Footer/footer.jsx';
import baseurl, { base_url } from '../../api.jsx'
import { motion } from 'framer-motion';
import Loader, { Loader2 } from '../../Components/Loading/Loading.jsx';

export default function Home() {
  const [isLoading, setIsLoading] = react.useState(true);
  const [products, setProducts] = react.useState([]);
  const get_products = async () => {
    try {
      // const response = await fetch(`${base_url}/get_products`);
      const response = await fetch(`${base_url}/get_products?category_id=12`);
      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  useEffect(() => {
    get_products();
    console.log(products,"products");
  }, []);
  const items = [
    {
      id: 1,
      image: 'path/to/image1.jpg',
      title: 'Product 1',
      description: 'High-quality item',
      price: '$30',
    },
    {
      id: 1,
      image: 'path/to/image1.jpg',
      title: 'Product 1',
      description: 'High-quality item',
      price: '$30',
    },
    {
      id: 1,
      image: 'path/to/image1.jpg',
      title: 'Product 1',
      description: 'High-quality item',
      price: '$30',
    },
    {
      id: 1,
      image: 'path/to/image1.jpg',
      title: 'Product 1',
      description: 'High-quality item',
      price: '$30',
    },
    {
      id: 1,
      image: 'path/to/image1.jpg',
      title: 'Product 1',
      description: 'High-quality item',
      price: '$30',
    },
    {
      id: 1,
      image: 'path/to/image1.jpg',
      title: 'Product 1',
      description: 'High-quality item',
      price: '$30',
    },
    {
      id: 1,
      image: 'path/to/image1.jpg',
      title: 'Product 1',
      description: 'High-quality item',
      price: '$30',
    },
    {
      id: 1,
      image: 'path/to/image1.jpg',
      title: 'Product 1',
      description: 'High-quality item',
      price: '$30',
    },
    // Add more items...
  ];
  
  return (
    <motion.div className='home'
    initial={{ opacity: 0, x: -50 }}    // Start animation
      animate={{ opacity: 1, x: 0 }}      // Animate in
      exit={{ opacity: 0, x: 50 }}       
      transition={{ duration: 0.5 }}     >
      <header>
      {/* <div style={{ position: 'sticky', top: 0, left: 0, right: 0 }}>
      <Navbar/>
      </div> */}
      <div className="banner-main ">
        <Banner/>
      </div>
      </header>
      <div className="delivery_section flex flex-wrap my-10 justify-around">
        <div className="delivery_section_col">
          <span className='del_icon'><FontAwesomeIcon icon={faCreditCard} /></span>
          <span>Secure Payment</span>
        </div>
        <div className="delivery_section_col">
          <span className='del_icon'><FontAwesomeIcon icon={faTruck} /></span>
          <span>Free Shipping</span>
        </div>
        <div className="delivery_section_col">
          <span className='del_icon'><FontAwesomeIcon icon={faBox} /></span>
          <span>Delivered with Care</span>
        </div>
        <div className="delivery_section_col">
          <span className='del_icon'><FontAwesomeIcon icon={faHeart} /></span>
          <span>Excellent Service</span>
        </div>
        
      </div>

      <div className="home_cards">
        {
          products?
          <Card/>
          :
          "Loading..."
        }
      </div>
      
    </motion.div>
  );
}