import { Carousel } from 'react-bootstrap';
<<<<<<< HEAD
import image from './images/Hiking.jpeg';
import image2 from './images/valley.jpg';
import image3 from './images/swing.jpeg';
import CitySearch from './searchByCity/citySearch';
=======
import Button from "react-bootstrap/Button";
import placeroyale from './images/placeroyale.webp'
import ski from './images/ski.jpg';
import mountain from './images/mountain.webp';
>>>>>>> main


function CarouselFade() {
  return (
<<<<<<< HEAD
    <Carousel fade className="carousel" style={{zIndex: -1}}>
=======
    <Carousel fade className="carousel" interval={10000} style={{zIndex: -1}}>
>>>>>>> main
        
      <Carousel.Item>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 fw-bold text-on-image">FIND YOUR NEXT ADVENTURE</h1>
            </div>
        </Carousel.Caption>          
        <img
          className="d-block" style={{overflow: "hidden"}}
          src={ ski } 
          alt="First slide"
        />
      </Carousel.Item>

<<<<<<< HEAD
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
=======
       <Carousel.Item>
         <Carousel.Caption>
            <div className="text-center">
             <h1 className="display-5 fw-bold text-on-image">FIND YOUR NEXT ADVENTURE</h1>
            </div>
         </Carousel.Caption>
         <img
           className="d-block" style={{overflow: "hidden"}}
           src={ placeroyale } 
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
           className="d-block" style={{overflow: "hidden"}}
           src={ mountain }
           alt="Third slide"
         />

       </Carousel.Item>
>>>>>>> main
    </Carousel>
  );
}

export default CarouselFade;