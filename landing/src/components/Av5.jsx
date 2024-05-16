import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Av5 = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        textAlign: 'center',
        marginTop: '4%',
        padding: '0 10%',
        marginBottom: '4%', 
    },
    title: {
        fontSize: isDesktopOrLaptop ? '3vw' : '5vw',
    },
    text: {
        fontSize: isDesktopOrLaptop ? '1.7vw' : '3vw',
    },
};

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Pourquoi choisir Ecogest ?</h1>
            <p style={styles.text}>
            En choisissant Ecogest, vous optez pour une solution écologique et économique. Notre système de gestion des gobelets et barquettes réutilisables vous permet de réduire considérablement votre empreinte carbone tout en réalisant des économies à long terme. 
            De plus, notre équipe dévouée est là pour vous accompagner à chaque étape du processus, de la planification à la mise en œuvre, pour garantir le succès de votre événement tout en préservant notre planète.
            </p>
        </div>
    );
};

export default Av5;