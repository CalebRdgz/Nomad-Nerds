import CitySearch from './searchByCity/citySearch';
import CategorySearch from './searchByCategory/CategorySearch';
import CarouselFade from './Carousel.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MainPage() {
    return (
      <>
      <CarouselFade />
        <Col>
          <Row>
            Search a city to get top activities & businesses<CitySearch/>
          </Row>
        </Col>
        <Col>
          <Row>
            Enter search info
          </Row>
        </Col>
        <Col>Category Search<CategorySearch/></Col>

    </>
  );
}
  
export default MainPage;