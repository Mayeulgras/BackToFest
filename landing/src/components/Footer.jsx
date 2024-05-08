import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" style={{backgroundColor: '#1F58AA', color: 'white', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
                <p style={{fontWeight: 'bold'}}>Contact</p>
                <p>contact@ecogest.eu</p>
                <p>+33 1 23 45 67 89</p>
            </div>
            <div>
                <FaFacebook size={30} style={{color: 'white', marginRight: '10px'}} />
                <FaInstagram size={30} style={{color: 'white', marginRight: '10px'}} />
                <FaLinkedin size={30} style={{color: 'white'}} />
            </div>
        </footer>
    );
};

export default Footer;