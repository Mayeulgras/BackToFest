import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import bannerImage from '../images/Ecogest.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', width: '100%', zIndex: 1000, backgroundColor: '#f9f9f9', padding: '0 2%'}}>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '30px', width: '13vw'}}>
                <FaFacebook style={{marginRight: '10px', fontSize: '2vw'}} />
                <FaInstagram style={{marginRight: '10px', fontSize: '2vw'}} />
                <FaLinkedin style={{fontSize: '2vw'}} />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', flex: 1}}>
                <Link to="/">
                    <img src={bannerImage} alt="Bannière" style={{width: '30vw', maxWidth: '600px', marginTop: '30px', display: 'flex', justifyContent: 'center'}} />
                </Link>
            </div>
                <div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
                    <ScrollLink to="footer" smooth={false} duration={350}>
                        <FaArrowDown style={{fontSize: '1.3vw', marginRight: '10px'}} />
                        <span style={{fontSize: '1.3vw'}}>Nous contacter</span>
                    </ScrollLink>
                </div>
        </header>
    );
};

export default Header;