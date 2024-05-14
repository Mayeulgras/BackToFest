import React from 'react';
import { useMediaQuery } from 'react-responsive';
import GobImage from '../images/Gob.png';

const Av2 = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            marginTop: '80px',
        },
        image: {
            width: isDesktopOrLaptop ? '40%' : '45%',
            marginLeft: '3%',
            marginRight: '2%',
        },
        textContainer: {
            marginLeft: '3%',
        },
        text: {
            fontSize: isDesktopOrLaptop ? '1.7vw' : '3vw',
        },
    };

    return (
        <div style={styles.container}>
            <img src={GobImage} alt="Gob" style={styles.image} />
            <div style={styles.textContainer}>
                <p style={styles.text}>Ne pensez plus à gérer le transport ni à la location de vos gobelets et barquettes.
                    Avant le début de votre festival nous enverrons des kits de gobelets et barquettes réutilisables directement su votre site et à nos frais.</p>
            </div>
        </div>
    );
};

export default Av2;