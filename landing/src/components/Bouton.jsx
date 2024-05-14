import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Bouton = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '15vw',
    },
    button: (hover) => ({
        backgroundColor: hover ? '#2E74DA' : '#1F58AA',
        color: 'white',
        padding: '10px 20px',
        fontSize: isDesktopOrLaptop ? '1.5vw' : '3vw',
        borderRadius: '15px',
        boxShadow: 'none',
        border: 'none',
        transition: 'background-color 0.3s ease',
    }),
};


    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!hover);
    };

    return (
        <div style={styles.container}>
            <Link to="/contacter">
                <button style={styles.button(hover)} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                    Nous contacter
                </button>
            </Link>
        </div>
    );
};

export default Bouton;