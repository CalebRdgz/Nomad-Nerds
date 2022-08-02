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
      <Container>
        <Row>
          <Col>Category Search<CategorySearch/></Col>
          <Col>Search a city to get top activities & businesses<CitySearch/></Col>
        </Row>
      </Container>
    </>
  );
}
  
export default MainPage;