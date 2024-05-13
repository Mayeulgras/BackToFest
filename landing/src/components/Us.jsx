import React from 'react';
import Axel from '../images/Axel.png';
import Mayeul from '../images/Mayeul.png';
import Romain from '../images/Romain.png';
import Maxime from '../images/Maxime.png';
import Enzo from '../images/Enzo.png';

const Us = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '10%', textAlign: 'center', marginTop: '3%', padding: '0 10%' }}>
            <h1 style={{ fontSize: '3em' }}>Qui sommes nous ?</h1>
            <p style={{ fontSize: '1.5em' }}>
                Bienvenue chez Ecogest ! Nous sommes une équipe passionnée par l'innovation et engagée dans la préservation de l'environnement. 
                Fondée par cinq amis - Axel, Mayeul, Romain, Maxime et Enzo - 
                notre entreprise est née de notre désir commun de proposer des solutions durables pour les festivals et événements.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: '2%', marginBottom: '2%' }}>
                <img src={Axel} alt="Axel" style={{ width: '10%' }} />
                <img src={Mayeul} alt="Mayeul" style={{ width: '10%' }} />
                <img src={Romain} alt="Romain" style={{ width: '10%' }} />
                <img src={Maxime} alt="Maxime" style={{ width: '10%' }} />
                <img src={Enzo} alt="Enzo" style={{ width: '10%' }} />
            </div>
        </div>
    );
};

export default Us;