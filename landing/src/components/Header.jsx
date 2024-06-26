import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import bannerImage from '../images/Ecogest.png';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
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
    socialContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '30px',
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
        display: 'flex',
        justifyContent: 'center',
    },
    contactContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '30px',
    },
    contactIcon: {
        fontSize: isDesktopOrLaptop ? '1.3vw' : '2.6vw',
        marginRight: '10px',
        marginBottom: '7px',
    },
    contactText: {
        fontSize: isDesktopOrLaptop ? '1.3vw' : '2.6vw',
    },
};


    const location = useLocation();

    return (
        <header style={styles.header}>
            <div style={styles.socialContainer}>
                <FaFacebook style={styles.socialIcon('10px')} />
                <FaInstagram style={styles.socialIcon('10px')} />
                <FaLinkedin style={styles.socialIcon('0px')} />
            </div>
            <div style={styles.bannerContainer}>
                <Link to="/">
                    <img src={bannerImage} alt="Bannière" style={styles.bannerImage} />
                </Link>
            </div>
            <div style={styles.contactContainer}>
                <ScrollLink to="footer" smooth={false} duration={350}>
                    <FaArrowDown style={styles.contactIcon} />
                    <span style={styles.contactText}>Nous contacter</span>
                </ScrollLink>
            </div>
        </header>
    );
};

export default Header;