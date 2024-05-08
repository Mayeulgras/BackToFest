import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import bannerImage from '../images/Ecogest.png';

const Header = () => {
    return (
        <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', width: '100%', zIndex: 1000, backgroundColor: '#f9f9f9', padding: '0 2%'}}>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
                <FaFacebook style={{marginRight: '10px', fontSize: '2vw'}} />
                <FaInstagram style={{marginRight: '10px', fontSize: '2vw'}} />
                <FaLinkedin style={{fontSize: '2vw'}} />
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-start', flex: 1}}>
                <img src={bannerImage} alt="Bannière" style={{width: '40%', marginLeft: '34.5%', marginTop: '30px'}} />
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
                <Link to="footer" smooth={true} duration={1000}>
                    <FaArrowDown style={{fontSize: '2vw', marginRight: '10px'}} />
                    <span style={{fontSize: '1.3vw'}}>Nous contacter</span>
                </Link>
            </div>
        </header>
    );
};
export default Header;