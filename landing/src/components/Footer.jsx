import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
        fontSize: '1.2vw',
    },
    contactPara: {
        fontSize: '1.2vw',
    },
    socialIcon: (marginRight) => ({
        color: 'white',
        marginRight: marginRight,
    }),
};

const Footer = () => {
    return (
        <footer id="footer" style={styles.footer}>
            <div>
                <p style={styles.contactTitle}>Contact</p>
                <p style={styles.contactPara}>contact@ecogest.eu</p>
                <p style={styles.contactPara}>+33 1 23 45 67 89</p>
            </div>
            <div>
                <FaFacebook size={'2vw'} style={styles.socialIcon('10px')} />
                <FaInstagram size={'2vw'} style={styles.socialIcon('10px')} />
                <FaLinkedin size={'2vw'} style={styles.socialIcon('0px')} />
            </div>
        </footer>
    );
};

export default Footer;