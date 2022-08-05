import { Carousel } from 'react-bootstrap';
import lake from './images/lake.jpg'
import nyc from './images/nyc_skyline.jpg';
import snowy from './images/snowy.jpg';
import sunset from './images/sunset.jpg';


function CarouselFade() {
  return (
    <Carousel fade className="carousel" interval={10000} style={{ zIndex: -1 }}>

      <Carousel.Item>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 fw-bold text-on-image">FIND YOUR NEXT ADVENTURE</h1>
          </div>
        </Carousel.Caption>
        <img
          className="d-block" style={{ overflow: "hidden" }}
          src={lake}
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
          src={sunset}
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
          src={nyc}
          alt="Second slide"
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
          src={snowy}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;