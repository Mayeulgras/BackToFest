import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import bannerImage from '../images/Ecogest.png';
import backButton from '../images/backButton.png';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Header2 = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#f9f9f9',
        padding: '0 2%',
    },
    backButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '15px',
        width: '13vw',
    },
    socialIcon: (marginRight) => ({
        marginRight: marginRight,
        fontSize: isDesktopOrLaptop ? '2vw' : '4vw',
    }),
    bannerContainer: {
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
    },
    bannerImage: {
        width: isDesktopOrLaptop ? '30vw' : '35vw',
        maxWidth: '600px',
        marginTop: '30px',
        marginLeft: '-13%',
    },
    backButton: {
        width: isDesktopOrLaptop ? '30vw' : '35vw',
        maxWidth: '600px',
        marginTop: '30px',
        marginLeft: '-17.8%',
    },
};

    const location = useLocation();

    return (
        <header style={styles.header}>
            <div style={styles.backButtonContainer}>
            <Link to="/">
            <img src={backButton} alt="Boutton retour" style={styles.backImage} />
            </Link>
            </div>
            <div style={styles.bannerContainer}>    
                    <img src={bannerImage} alt="Bannière" style={styles.bannerImage} />
            </div>
        </header>
    );
};

export default Header2;