import CitySearch from './citySearch';
import CategorySearch from './CategorySearch'
import CitySearch from './citySearch'
import background from './images/SF.png';
import CarouselFade from './Carousel.js';


function MainPage() {
    return (
      <>
      <CarouselFade />
          <CitySearch/>
          <div className="footer-container">
        </div>
      <div className="wrapper" style={{ backgroundImage: `url(${background})`}}>
        <div className="px-5 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">Nomad-Nerds</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-30 pb-5">
              Connecting you to your favorite activities and locations!
            </p>
          </div>
        </div>
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