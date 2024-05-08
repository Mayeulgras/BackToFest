import React from 'react';
import { FaFacebook, FaInstagram, FaXing, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import bannerImage from '../images/Ecogest.png';

const Header = () => {
    return (
        <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', width: '100%', zIndex: 1000, backgroundColor: '#f9f9f9', padding: '0 2%'}}>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
                <FaFacebook style={{marginRight: '10px', fontSize: '2vw'}} />
                <FaInstagram style={{marginRight: '10px', fontSize: '2vw'}} />
                <FaXing style={{fontSize: '2vw'}} />
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-start', flex: 1}}>
                <img src={bannerImage} alt="Bannière" style={{width: '40%', marginLeft: '33%', marginTop: '30px'}} />
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
                <Link to="footer" smooth={true} duration={1000}>
                    <FaArrowDown style={{fontSize: '2vw', marginRight: '10px'}} />
                    <span style={{fontWeight: 'bold'}}>Nous contacter</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;