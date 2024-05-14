import React from 'react';
import Axel from '../images/Axel.png';
import Mayeul from '../images/Mayeul.png';
import Romain from '../images/Romain.png';
import Maxime from '../images/Maxime.png';
import Enzo from '../images/Enzo.png';
import { useMediaQuery } from 'react-responsive';

const Us = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        textAlign: 'center',
        marginTop: '3%',
        padding: '0 10%',
    },
    title: {
        fontSize: isDesktopOrLaptop ? '3w' : '5w',
    },
    text: {
        fontSize: isDesktopOrLaptop ? '1.7vw' : '3vw',
    },
    imagesContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: '2%',
        marginBottom: '2%',
    },
    image: {
        width: '10%',
    },
};

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Qui sommes nous ?</h1>
            <p style={styles.text}>
                Bienvenue chez Ecogest ! Nous sommes une équipe passionnée par l'innovation et engagée dans la préservation de l'environnement. 
                Fondée par cinq amis - Axel, Mayeul, Romain, Maxime et Enzo - 
                notre entreprise est née de notre désir commun de proposer des solutions durables pour les festivals et événements.
            </p>
            <div style={styles.imagesContainer}>
                <img src={Axel} alt="Axel" style={styles.image} />
                <img src={Mayeul} alt="Mayeul" style={styles.image} />
                <img src={Romain} alt="Romain" style={styles.image} />
                <img src={Maxime} alt="Maxime" style={styles.image} />
                <img src={Enzo} alt="Enzo" style={styles.image} />
            </div>
        </div>
    );
};

export default Us;