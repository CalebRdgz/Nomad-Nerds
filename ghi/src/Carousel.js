import { Carousel } from 'react-bootstrap';
import image from './images/grandcanyon.png';
import image2 from './images/chicago.png';
import image3 from './images/image.png';
import image4 from './images/pano.jpg';

function CarouselFade() {
  return (
    <Carousel fade className="carousel">
        
        <Carousel.Item>
        <Carousel.Caption>
          <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Nomad Nerds</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-30 pb-6 fw-bold">
                  Connecting you to your favorite activities and locations!
                </p>
              </div>
            </div>
        </Carousel.Caption>
        <img
          className="d-block" style={{overflow: "hidden"}}
          src={ image } height={500}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Nomad Nerds</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-30 pb-6 fw-bold">
                  Connecting you to your favorite activities and locations!
                </p>
              </div>
            </div>
        </Carousel.Caption>
        <img
          className="d-block" style={{overflow: "hidden"}}
          src={ image2 } height={500}
          alt="Second slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <div className="px-5 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Nomad Nerds</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-30 pb-6 fw-bold">
                  Connecting you to your favorite activities and locations!
                </p>
              </div>
            </div>
        </Carousel.Caption>
        <img
          className="d-block" style={{overflow: "hidden"}}
          src={ image3 } height={500}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <div className="px-5 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Nomad Nerds</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-30 pb-6 fw-bold">
                  Connecting you to your favorite activities and locations!
                </p>
              </div>
            </div>
        </Carousel.Caption>
        <img
          className="d-block" style={{overflow: "hidden"}}
          src={ image4 }
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;