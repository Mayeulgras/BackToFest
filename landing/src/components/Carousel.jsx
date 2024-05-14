import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../images/Slide1.png';
import Image2 from '../images/Slide2.png';
import Image3 from '../images/Slide3.png';
import Image4 from '../images/Slide4.png';
import Image5 from '../images/Slide5.png';

const styles = {
    carousel: {
        marginTop: '30px',
    },
    image: {
        width: '100%',
    },
};

function MyCarousel() {
  return (
    <Carousel style={styles.carousel}> 
      <Carousel.Item>
        <img style={styles.image} src={Image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={styles.image} src={Image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={styles.image} src={Image3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={styles.image} src={Image4} alt="Forth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img style={styles.image} src={Image5} alt="Fifth slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;