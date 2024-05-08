import React, { useState } from 'react';

const Bouton = () => {
    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!hover);
    };

    const style = {
        backgroundColor: hover ? '#2E74DA' : '#1F58AA',
        color: 'white',
        padding: '10px 20px',
        fontSize: '20px',
        borderRadius: '15px',
        boxShadow: 'none',
        border: 'none',
        transition: 'background-color 0.3s ease'
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh'}}>
            <button style={style} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                Nous contacter
            </button>
        </div>
    );
};

export default Bouton;