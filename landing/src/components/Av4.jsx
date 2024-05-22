import React from 'react';
import { useMediaQuery } from 'react-responsive';
import BarImage from '../images/bar.png'; // Assurez-vous que le chemin vers l'image est correct



const Av4 = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '50px',
    },
    image: {
        width: isDesktopOrLaptop ? '40%' : '45%',
        marginRight: '3%',
        marginLeft: '3%',
    },
    textContainer: {
        marginLeft: '20px',
    },
    text: {
        fontSize: isDesktopOrLaptop ? '1.7vw' : '3vw',
        marginRight: '3%',
    },
};

    return (
        <div style={styles.container}>
            <img src={BarImage} alt="Bar" style={styles.image} />
            <div style={styles.textContainer}>
                <p style={styles.text}>Comment cela fonctionne ? Nous vous passons nos stocks de gobelets et barquettes réutilisables que vous vendrez dans
                le prix du billet 2€ le kit. Chaque festivalier ira chercher son kit dans les zones de restaurations et payera 3€ de consigne.
                Si son gobelet ou sa barquette est sale, il pourra en avoir des propres gratuitement.</p>
            </div>
        </div>
    );
};

export default Av4;