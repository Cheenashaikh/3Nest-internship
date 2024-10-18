
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import image from "../../assets/istockphoto-1299755378-612x612-removebg-preview.png";
import instagram from "../../assets/images__12_-removebg-preview.png";
import be from "../../assets/6344db1276a534f33bfe96a1_After_Be-removebg-preview.png";
import "./header.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isMenuOpen ? "show" : ""}`}>
            <div className="content">
                <div className="logo">
                    <img src={image} alt="logo" />

                </div>
                <div className="menu-list ">
                    <div className="icon cancel-btn" onClick={toggleMenu}>
                        <li><i className="fas fa-times"></i></li>
                    </div>
                   
                    
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">How it Works</a></li>
                    <li><a href="#">Contact Us</a></li>
                   
                   
              
                    <li><img src={instagram} alt="Instagram" className="image" /></li>
                    <li><img src={be} alt="Behance" /></li>
                    <li><button>Let's Talk</button></li>
                    


                </div>
                <div className="icon menu-btn" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </div>
              
            </div>
        </nav>
    );
}

export default Header;


