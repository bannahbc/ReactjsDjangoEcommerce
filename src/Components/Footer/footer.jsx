import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF,faInstagram,faYoutube,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
const Footer = () => {
    return(
        <motion.footer className="flex flex-col p-4 border-t border-gray-300 bg-gray-100">
            <div className="footer-content md:pl-40">
                <h2 className="font-mono text-lg mb-3">Contact Us</h2>
                <p>Email: <span><a href="email">bestshop@gmail.com</a></span></p>
                <p>Phone: <span><a href="tel">+971 987654321</a></span></p>
                <p>Address: 10th Floor, vista tower <br />business bay,<br />Dubai,Uae</p>
                
            </div>
            <div className="footer_main flex justify-around items-center">
                <div className="footer_left">
                    <div className="footer_logo">
                        {/* <h1 className="text-2xl font-bold">Logo</h1> */}
                    </div>
                </div>
                    <div className="footer_right flex gap-4 text-xl">
                        <a href="#">
                            
                        <FontAwesomeIcon icon={faFacebookF} className="footer_icon" />
                        </a>
                        <a href="#">
                        <FontAwesomeIcon icon={faInstagram} className="footer_icon" />

                        </a>
                        <a href="#">
                        <FontAwesomeIcon icon={faYoutube} className="footer_icon" />

                        </a>
                        <a href="#">

                        <FontAwesomeIcon icon={faLinkedin} className="footer_icon" />
                        </a>
                        
                    </div>
            </div>
            {/* 
            <div className="footer-content">
                <h2>Contact Us</h2>
                <p>Email:</p>
                <p>Phone:</p>
                <p>Address:</p>
                <p>Follow us on:</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>LinkedIn</p>
                <p>Copyright &copy; 2023 Your Company. All rights reserved.</p>
            </div>
            <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Help Center</a>
                <a href="#">FAQ</a>
                <a href="#">Sitemap</a>
            </div>
            <div className="footer-socials">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>    
            </div> */}
            <div className="footer-bottom text-center mt-4">
                <hr className="mb-2"/>
                <p>&copy; 2023 Your Company. All rights reserved.</p>   
                </div>
        </motion.footer>
    )
}

export default Footer;