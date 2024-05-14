import React from 'react';

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
        fontSize: '3vw',
    },
    text: {
        fontSize: '1.5vw',
    },
};

const Contact = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Contactez nous !</h1>
            <p style={styles.text}>
            Nous sommes impatients de vous rencontrer et de discuter de la manière dont Ecogest peut répondre à vos besoins lors de votre prochain festival. 
            Contactez-nous dès aujourd'hui pour en savoir plus sur notre solution et commençons à construire un avenir plus vert ensemble !
            </p>
        </div>
    );
};

export default Contact;