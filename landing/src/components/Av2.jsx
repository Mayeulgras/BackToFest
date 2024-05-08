import React from 'react';
import GobImage from '../images/Gob.png'; // Assurez-vous que le chemin vers l'image est correct

const Av2 = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', marginTop: '80px'}}>
            <img src={GobImage} alt="Gob" style={{width: '30%', marginLeft: '3%'}} />
            <div style={{marginLeft: '3%'}}>
                <p style={{ fontSize: '1.5em' }}>Ne pensez plus à gérer le transport ni à la location de vos gobelets et barquettes.
                    Avant le début de votre festival nous enverrons des kits de gobelets et barquettes réutilisables directement su votre site et à nos frais.
                </p>
            </div>
        </div>
    );
};

export default Av2;