import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Av1 = () => {
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
            <h1 style={styles.title}>Notre solution</h1>
            <p style={styles.text}>
                Nous avons développé une solution complète qui permet aux organisateurs de festivals de se décharger de la logistique fastidieuse liée aux gobelets et barquettes réutilisables. 
                En optant pour notre service, les festivals peuvent se concentrer sur leur cœur de métier tout en contribuant activement à la protection de notre planète.
            </p>
        </div>
    );
};

export default Av1;