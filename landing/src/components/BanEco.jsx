import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ImageBanEco from '../images/BanEco.png';

const BanEco = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
const styles = {
    img: {
        width: '100%',
        marginRight: 'auto',
    },
};

    return (
        <img style={styles.img} src={ImageBanEco}/>
    );
};

export default BanEco;