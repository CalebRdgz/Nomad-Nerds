import { Carousel } from 'react-bootstrap';
import image from './images/chicago.png';
import image2 from './images/barcelona.png';
import image3 from './images/SF.png';

function CarouselFade() {
  return (
    <Carousel fade className="carousel">
        
        <Carousel.Item>
        <Carousel.Caption>
          <div className="px-4 py-2 my-5 text-center">
            <h1 className="display-5 fw-bold">Nomad Nerds</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-30 pb-6">
                  Connecting you to your favorite activities and locations!
                </p>
              </div>
            </div>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={ image } height={400}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
        <div className="px-4 py-2 my-5 text-center">
            <h1 className="display-5 fw-bold">Nomad Nerds</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-30 pb-6">
                  Connecting you to your favorite activities and locations!
                </p>
              </div>
            </div>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={ image2 } height={400}
          alt="Second slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <div className="px-5 py-2 my-5 text-center">
            <h1 className="display-5 fw-bold">Nomad Nerds</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-30 pb-6">
                  Connecting you to your favorite activities and locations!
                </p>
              </div>
            </div>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={ image3 } height={400}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;