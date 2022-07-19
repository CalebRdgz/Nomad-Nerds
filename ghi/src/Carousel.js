import { Carousel } from 'react-bootstrap';
import image from './images/kayak.png';
import image2 from './images/grandcanyon.png';
import image3 from './images/SF.png';

function CarouselFadeExample() {
  return (
    <Carousel fade className="carousel">
        
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={ image } height={400}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Nomad Nerds</h3>
          <p>Connecting you to all your favorite activities and locations</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ image2 } height={400}
          alt="Second slide"
        />

        <Carousel.Caption>
            <h3>Nomad Nerds</h3>
            <p>Connecting you to all your favorite activities and locations</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ image3 } height={400}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Nomad Nerds</h3>
          <p>Connecting you to all your favorite activities and locations</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;