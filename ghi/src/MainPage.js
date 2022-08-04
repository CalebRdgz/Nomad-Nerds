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
          <Col style={{marginTop: -650}}>
            <CitySearch/>
          </Col>
          <Col style={{marginTop: -650}}><CategorySearch/></Col>          
        </Row>
      </Container>
      
    </>
  );
}
  
export default MainPage;