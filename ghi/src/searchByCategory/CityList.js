import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAuthContext } from "../users/Auth";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

function CategoryList() {
    const location = useLocation();
    const [rankedCities, setRankedCities] = useState([]);
    const [businesses, setBusinesses] = useState([]);
    const [business_id, setBusiness_id] = useState('');
    const [businessesLoading, setBusinessesLoading] = useState(true)
    const [citiesLoading, setCitiesLoading]  = useState(true)
    const { token } = useAuthContext();
    const category = location.state.category
    const cities = location.state.cities
    const formatted_cities = cities.map(city => [city.city, city.admin_name, city.country].join(',')).join(';')

    async function getCities() {
        const fetchConfig = {
            method: 'get',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        }
        const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/categories/search/?categories=${category.alias}&quantity=2&cities=${formatted_cities}`
        const response = await fetch(url, fetchConfig)
        
        if (response.ok) {
            const data = await response.json()
            setRankedCities(data['cities'])}
            setCitiesLoading(false)
    }
    
    
    function fetchBusinesses(cat, city) {
        const fetchConfig = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":"*",
            },
        };
        const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/list?category=${cat}&location=${city}&quantity=1`;
        return fetch(url, fetchConfig);
    }


    function getBusinesses() {
        if (rankedCities && rankedCities.length > 0) {
            Promise.all(rankedCities
                .map(city => fetchBusinesses(category.alias, city)
                    .then(res => res.json())
                    .then(data => ({[city[0].replaceAll(',', ', ')]: data}))))
                .then(data => (setBusinessesLoading(false), setBusinesses(data)))
        }
    }


    async function addFavorite(id) {
        const url = `${process.env.REACT_APP_USER}/user/favorites/`
        let content = {business_id: id}
        const fetchConfig = {
            credentials: "include",
            method: "post",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(content)
        };
        
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const data = await response.json();
            setBusiness_id(data);
        }
    }



    useEffect(() => {
        getCities();
    }, []);

    useEffect(() => {
        getBusinesses();
    }, [rankedCities]);
    

    if (citiesLoading === false && rankedCities.length === 0 || businessesLoading === false && businesses.length === 0) {
        return (
            <div className="text-center">
                <h1>Don't have the info</h1>
            </div>
        )
    } 
    else if (businessesLoading === true) {
        return (
            <div className="text-center">
                <h1>LOADING</h1>
                <h2>Compiling your businesses</h2>
            </div>
        )
    }

    return (
        <ul>
            {businesses.map((business, index) => (
            <div key={index}>
              <h1>{Object.keys(business)}</h1>
                <Container className="container-fluid">
                <Row className="flex-nowrap flex-row" style={{overflowX: "scroll"}}>
                  {Object.values(business)[0].slice(0,15).map((store, idx) => (
                        <Col key={idx} className="col-3">
                        <Card style={{backgroundColor: "light gray"}}>
                        <Card.Img variant="top" src={store.image_url} height={200} />
                            <Card.Title>{store.name}</Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    {store.location.display_address[0]} <br />
                                    {store.location.display_address[1]}<br />
                                    {store.location.display_address[2]}<br />
                                    Price: {store.price} <br />
                                    Rating: {store.rating}
                                </Card.Text>
                            <Button variant="light" onClick={() => addFavorite(store.id)}><AiOutlineHeart size="1.8em" />
                            </Button>
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
export default CategoryList;