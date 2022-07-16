import Carousel from 'react-bootstrap/Carousel';
import SF from './images/SF.png';
import kayak from './images/kayak.png';


function CarouselTest() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ SF }
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ kayak }
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselTest;