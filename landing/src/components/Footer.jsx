import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
const styles = {
    footer: {
        backgroundColor: '#1F58AA',
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contactTitle: {
        fontWeight: 'bold',
        fontSize: isDesktopOrLaptop ? '1.2vw' : '2vw',
    },
    contactPara: {
        fontSize: isDesktopOrLaptop ? '1.2vw' : '2vw',
    },
    socialIcon: (marginRight) => ({
        color: 'white',
        marginRight: marginRight,
    }),
};


    return (
        <footer id="footer" style={styles.footer}>
            <div>
                <p style={styles.contactTitle}>Contact</p>
                <p style={styles.contactPara}>contact@ecogest.eu</p>
                <p style={styles.contactPara}>+33 1 23 45 67 89</p>
            </div>
            <div>
                <FaFacebook size={isDesktopOrLaptop ? '2vw' : '4vw'} style={styles.socialIcon('10px')} />
                <FaInstagram size={isDesktopOrLaptop ? '2vw' : '4vw'} style={styles.socialIcon('10px')} />
                <FaLinkedin size={isDesktopOrLaptop ? '2vw' : '4vw'} style={styles.socialIcon('0px')} />
            </div>
        </footer>
    );
};

export default Footer;