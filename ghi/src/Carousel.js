import { Carousel } from 'react-bootstrap';
import lake from './images/lake.jpg'
import snowy from './images/snowy.jpg';
import nycSkyline from './images/nyc_skyline.jpg';
import sunset from './images/sunset.jpg';


function CarouselFade() {
  return (
<<<<<<< HEAD
    <Carousel fade className="carousel" interval={10000} style={{ zIndex: -1 }}>
=======
    <Carousel fade className="carousel" interval={6000} style={{ zIndex: -1 }}>
>>>>>>> main

      <Carousel.Item>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 fw-bold text-on-image">FIND YOUR NEXT ADVENTURE</h1>
          </div>
        </Carousel.Caption>
        <img
          className="d-block" style={{ overflow: "hidden" }}
<<<<<<< HEAD
          src={lake}
=======
          src={snowy}
>>>>>>> main
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 fw-bold text-on-image">FIND YOUR NEXT ADVENTURE</h1>
          </div>
        </Carousel.Caption>
        <img
          className="d-block" style={{ overflow: "hidden" }}
<<<<<<< HEAD
          src={sunset}
          alt="First slide"
=======
          src={lake}
          alt="Second slide"
>>>>>>> main
        />

      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 fw-bold text-on-image">FIND YOUR NEXT ADVENTURE</h1>
          </div>
        </Carousel.Caption>
        <img
          className="d-block" style={{ overflow: "hidden" }}
<<<<<<< HEAD
          src={nyc}
          alt="Second slide"
=======
          src={nycSkyline}
          alt="Third slide"
>>>>>>> main
        />

      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 fw-bold text-on-image">FIND YOUR NEXT ADVENTURE</h1>
          </div>
        </Carousel.Caption>
        <img
          className="d-block" style={{ overflow: "hidden" }}
<<<<<<< HEAD
          src={snowy}
          alt="Third slide"
        />

=======
          src={sunset}
          alt="Forth slide"
        />
>>>>>>> main
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;