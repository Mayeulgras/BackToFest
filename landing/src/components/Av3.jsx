import React from 'react';
import { useMediaQuery } from 'react-responsive';
import CamionImage from '../images/Camion.png'; // Assurez-vous que le chemin vers l'image est correct

const Av3 = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '50px',
    },
    textContainer: {
        marginRight: '20px',
        marginLeft: '4%',
    },
    text: {
        fontSize: isDesktopOrLaptop ? '1.7vw' : '3vw',
    },
    image: {
        width:isDesktopOrLaptop ? '40%' : '45%',
        marginLeft: '3%',
        marginRight: '2%',
    },
};

    return (
        <div style={styles.container}>
            <div style={styles.textContainer}>
                <p style={styles.text}>Plus les jours du festival passent plus vous manquez de gobelets et de barquettes ?
                Ce n'est pas un problème, nous aurons à proximité de votre festival un camion chargé de laver les objets sales au fur et à mesure.</p>
            </div>
            <img src={CamionImage} alt="Camion" style={styles.image} />
        </div>
    );
};
export default Av3;