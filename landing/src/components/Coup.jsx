import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Coupe = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
const styles = {
    container: {
        backgroundColor: '#1F58AA',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginTop: '2%',
        fontSize: isDesktopOrLaptop ? '3vw' : '5vw',
        display: 'flex',
        justifyContent: 'center',
    },
};


    return (
        <div style={styles.container}>
           <p> Nous agissons pour tous les festivals ! </p>
        </div>
    );
};

export default Coupe;