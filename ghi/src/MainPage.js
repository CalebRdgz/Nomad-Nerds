import CitySearch from './citySearch';
import background from './images/SF.png';
import CarouselFade from './Carousel.js';

function MainPage() {
    return (
      <>
      <CarouselFade />
          <CitySearch/>
          <div className="footer-container">
        </div>
      </>
  );
}
  
export default MainPage;