import React from 'react';
import { FaFacebook, FaInstagram, FaXing } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" style={{backgroundColor: '#1F58AA', color: 'white', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
                <p>Contact</p>
                <p>ecogest@gmail.com</p>
                <p>+33 1 23 45 67 89</p>
            </div>
            <div>
                <FaFacebook size={30} style={{color: 'white', marginRight: '10px'}} />
                <FaInstagram size={30} style={{color: 'white', marginRight: '10px'}} />
                <FaXing size={30} style={{color: 'white'}} />
            </div>
        </footer>
    );
};

export default Footer;