import { Carousel } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import placeroyale from './images/placeroyale.webp'
import ski from './images/ski.jpg';
import mountain from './images/mountain.webp';


function CarouselFade() {
  return (
    <Carousel fade className="carousel" interval={10000} style={{zIndex: -1}}>
        
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
    </Carousel>
  );
}

export default CarouselFade;