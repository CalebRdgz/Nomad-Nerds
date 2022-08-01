import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAuthContext } from "../users/Auth";
import { AiOutlineHeart } from "react-icons/ai";



function CategoryList() {
    const location = useLocation();
    const [categories, setCategories] = useState([]);
    const [businesses, setBusinesses] = useState([]);
    const [business_id, setBusiness_id] = useState('');
    const { token } = useAuthContext();
    const city = (location.state.city.city).replace(/ /g, '%20');
    
    async function getCategories() {
        const fetchConfig = {
            method: "get",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        };
        const categories_url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/categories/?location=${city}&quantity=1`;
        const response = await fetch(categories_url, fetchConfig);
        if (response.ok) {
            const data = await response.json();
            setCategories(data["categories"]);
        }
    }
    
    function fetchBusinesses(category, city) {
        const fetchConfig = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":"*",
            },
        };
        const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/list?category=${category}&location=${city}&quantity=1`;
        return fetch(url, fetchConfig);
    }

    function getBusinesses() {
        if (categories && categories.length > 0) {
            Promise.all(categories.slice(0, 5)
                .map(category => fetchBusinesses(category[0], city)
                    .then(res => res.json())
                    .then(data => ({[category[1]]: data}))))
                .then(data => setBusinesses(data))
        }
    }

    async function addFavorite() {
        getBusinesses()
        let business_id = businesses.map((business) => (Object.values(business)[0].slice(0,15).map((store) => (store.id))))
        const url = `${process.env.REACT_APP_USER}/user/favorites/`
        const fetchConfig = {
            credentials: "include",
            method: "post",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(business_id[0][0])
        };
        
        const response = await fetch(url, fetchConfig);
        console.log('response', response)
        if (response.ok) {
            const data = await response.json();
            setBusiness_id(data);
        }

    }



    useEffect(() => {
        getCategories();
    }, []);
    useEffect(() => {
        getBusinesses();
    }, [categories]);
    console.log('businesses', businesses)

    return (
        <ul>
            {businesses.map((business, index) => (
            <div key={index}>
              <h1>{Object.keys(business)}</h1>
                <Container className="container-fluid">
                <Row className="flex-nowrap flex-row" style={{overflowX: "scroll"}}>
                  {Object.values(business)[0].slice(0,15).map((store, idx) => (
                        <Col key={idx} className="col-3">
                        <Card>
                        <Card.Img variant="top" src={store.image_url} height={200} />
                        
                            <Card.Title>{store.name}</Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    {store.location.display_address[0]} <br />
                                    {store.location.display_address[1]}<br />
                                    Price: {store.price} <br />
                                    Rating: {store.rating}
                                </Card.Text>
                                <Button variant="light" onClick={addFavorite}>< AiOutlineHeart size="1.8em" />️
                                    {/* Need to figure out how to get store.id into addFavorite on click */}
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
