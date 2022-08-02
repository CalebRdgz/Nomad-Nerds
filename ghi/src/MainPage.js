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
          <Col style={{marginTop: -1700}}>
            <Row>
            Search a city to get top activities & businesses<CitySearch/>
            </Row>
            <Row>
              Hello
            </Row>
          </Col>
          <Col style={{marginTop: -1700}}>Category Search<CategorySearch/></Col>          
        </Row>
      </Container>
    </>
  );
}
  
export default MainPage;