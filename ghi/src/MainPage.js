import CitySearch from './searchByCity/citySearch';
import CategorySearch from './CategorySearch'
import background from './images/SF.png';
import CarouselFade from './Carousel.js';


function MainPage() {
    return (
      <>
      <CarouselFade />
        <div className="footer-container">
        </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="d-flex justify-content-center">
              Category Search
            </div>
            <CategorySearch/>
          </div>
          <div className='col'>
            <div className="d-flex justify-content-center">
              City Search
            </div>
            <div className="d-flex justify-content-center">
              <CitySearch/>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
}
  
export default MainPage;