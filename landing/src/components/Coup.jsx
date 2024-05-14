import React from 'react';

const styles = {
    container: {
        backgroundColor: '#1F58AA',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginTop: '2%',
        fontSize: '3vw',
        display: 'flex',
        justifyContent: 'center',
    },
};

const Coupe = () => {
    return (
        <div style={styles.container}>
           <p> Nous agissons pour tous les festivals ! </p>
        </div>
    );
};

export default Coupe;