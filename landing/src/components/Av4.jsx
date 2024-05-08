import React from 'react';
import BarImage from '../images/bar.png'; // Assurez-vous que le chemin vers l'image est correct

const Av4 = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', marginTop: '50px'}}>
            <img src={BarImage} alt="Bar" style={{width: '30%', marginRight: '3%', marginLeft: '3%'}} />
            <div style={{marginLeft: '20px'}}>
                <p style={{fontSize: '1.5em', marginRight: '3%'}}>Comment cela fonctionne ? Nou svous passons nos stocks de gobelets et barquettes réutilisables que vous vendrez dans
                le prix du billet 2.50€ le kit. Chaque festivalier ira chercher son kit dans les zones de restaurations et payera 3€ de consigne.
                Si son gobelet ou sa barquette est sale, il pourra en avoir des propres gratuitement.</p>
            </div>
        </div>
    );
};

export default Av4;