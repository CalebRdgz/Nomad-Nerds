import { Carousel } from 'react-bootstrap';
import image from './images/Hiking.jpeg';
import image2 from './images/valley.jpg';
import image3 from './images/swing.jpeg';
import CitySearch from './searchByCity/citySearch';


function CarouselFade() {
  return (
    <Carousel fade className="carousel" style={{zIndex: -1}}>
        
      <Carousel.Item>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 fw-bold text-on-image">FIND YOUR NEXT ADVENTURE</h1>
            </div>
        </Carousel.Caption>          
        <img
          className="d-block" style={{overflow: "hidden"}}
          src={ image } 
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <div className="px-5 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold text-on-image">FIND YOUR NEXT ADVENTURE</h1>
            </div>
        </Carousel.Caption>
        <img
          className="d-block" style={{overflow: "hidden"}}
          src={ image2 } 
          alt="Second slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <div className="px-5 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold text-on-image">FIND YOUR NEXT ADVENTURE</h1>
            </div>
        </Carousel.Caption>
        <img
          className="d-block" style={{overflow: "hidden"}}
          src={ image3 }
          alt="Third slide"
        />

      // </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;