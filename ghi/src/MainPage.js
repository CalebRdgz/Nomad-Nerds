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
<<<<<<< HEAD
          <Col style={{marginTop: -1500}}>
            <Row>
            <CitySearch/>
            </Row>
          </Col>
          <Col style={{marginTop: -1500}}>
            <CategorySearch/>
          </Col>          
=======
          <Col style={{marginTop: -1650}}>
            <CitySearch/>
          </Col>
          <Col style={{marginTop: -1650}}><CategorySearch/></Col>          
>>>>>>> main
        </Row>
      </Container>
      
    </>
  );
}
  
export default MainPage;