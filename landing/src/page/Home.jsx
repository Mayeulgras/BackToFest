import React from 'react';
import Header from '../components/Header'; 
import MyCarousel from '../components/Carousel';
import Us from '../components/Us';
import Coupe from '../components/Coup';
import Av1 from '../components/Av1';
import Av2 from '../components/Av2';
import Av3 from '../components/Av3';
import Av4 from '../components/Av4';
import Av5 from '../components/Av5';
import Contact from '../components/Contact';
import BoutonNousContacter from '../components/BoutonNousContacter';
import Footer from '../components/Footer';
import BanEco from '../components/BanEco';

const Home = () => {
    return (
        <div>
            <Header />
            <div style={{height: '20px'}} />
            <MyCarousel />
            <Us />
            <Coupe />
            <Av1 />
            <Av2 />
            <Av3 />
            <Av4 />
            <Av5 />
            <BanEco />
            <Contact />
            <BoutonNousContacter />
            <Footer />
        </div>
    );
};

export default Home;