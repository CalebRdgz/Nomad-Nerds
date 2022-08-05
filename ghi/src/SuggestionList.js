import activities from './activities.json';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function SuggestionList() {

    const lowerNum = (Math.floor(Math.random() * 11));
    const higherNum = lowerNum + 4;

    return (
        <ul>
            <h1 style={{ fontWeight: "bold", paddingTop: 15, textAlign: 'center' }}>Popular Destinations</h1>
            {activities.map((location, index) => (
                <div key={index}>
                    <Container className="container-fluid">
                        <h3 className="card-title" style={{ fontWeight: "bolder", padding: 15, paddingTop: 15 }}>{Object.keys(location)}</h3>
                        <Row className="flex-nowrap flex-row">
                            {Object.values(location)[0].slice(lowerNum, higherNum).map((activity, idx) => (
                                <Col key={idx} className="col-3">
                                    <Card style={{ width: "18rem" }}>
                                        <Card.Img variant="top" src={activity.image_url} height={250} />
                                        <Card.Title style={{ fontWeight: "bold", textAlign: "center" }}>{activity.name}</Card.Title>
                                        <Card.Body>
                                            <Card.Text>
                                                {activity.location.display_address[0]}<br />
                                                {activity.location.display_address[1]}<br />
                                                {activity.location.display_address[2]}<br />
                                                {activity.price ? `Price: ${activity.price}` : ''}<br />
                                                Rating: {activity.rating}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>

            ))}
        </ul>
    )
}

export default SuggestionList