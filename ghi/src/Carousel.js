import { Carousel } from "react-bootstrap";
import lake from "./images/lake.jpg";
import snowy from "./images/snowy.jpg";
import nycSkyline from "./images/nyc_skyline.jpg";
import sunset from "./images/sunset.jpg";

function CarouselFade() {
  return (
    <Carousel fade className="carousel" interval={6000} style={{ zIndex: -1 }}>
      <Carousel.Item>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 fw-bold text-on-image">
              FIND YOUR NEXT ADVENTURE
            </h1>
          </div>
        </Carousel.Caption>
        <img
          className="d-block"
          style={{ overflow: "hidden" }}
          src={snowy}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item style={{ zIndex: -1 }}>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 fw-bold text-on-image">
              FIND YOUR NEXT ADVENTURE
            </h1>
          </div>
        </Carousel.Caption>
        <img
          className="d-block"
          style={{ overflow: "hidden" }}
          src={lake}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 fw-bold text-on-image">
              FIND YOUR NEXT ADVENTURE
            </h1>
          </div>
        </Carousel.Caption>
        <img
          className="d-block"
          style={{ overflow: "hidden" }}
          src={nycSkyline}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 fw-bold text-on-image">
              FIND YOUR NEXT ADVENTURE
            </h1>
          </div>
        </Carousel.Caption>
        <img
          className="d-block"
          style={{ overflow: "hidden" }}
          src={sunset}
          alt="Forth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
